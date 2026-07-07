# Kapselung in Java

## Grundidee

**Kapselung** bedeutet: Ein Objekt schützt seinen inneren Zustand und gibt nach außen nur kontrolliert Zugriff frei.

Typisches Beispiel:

```java
public class Konto {
    private double kontostand;

    public void einzahlen(double betrag) {
        if (betrag > 0) {
            kontostand += betrag;
        }
    }

    public double getKontostand() {
        return kontostand;
    }
}
```

Hier kann niemand direkt schreiben:

```java
konto.kontostand = -999999;
```

Stattdessen muss man über Methoden gehen. Diese Methoden können Regeln prüfen.

---

# 1. Warum überhaupt Kapselung?

Kapselung schützt vor unkontrolliertem Zugriff.

Ohne Kapselung könnte jeder Code beliebige Werte setzen:

```java
public class Konto {
    public double kontostand;
}
```

Dann wäre möglich:

```java
Konto konto = new Konto();
konto.kontostand = -5000;
```

Das ist fachlich vielleicht Unsinn. Ein Konto sollte nicht einfach direkt von außen auf einen beliebigen Wert gesetzt werden können.

Mit Kapselung:

```java
public class Konto {
    private double kontostand;

    public void abheben(double betrag) {
        if (betrag > 0 && betrag <= kontostand) {
            kontostand -= betrag;
        }
    }
}
```

Jetzt kontrolliert die Klasse selbst, was erlaubt ist.

---

# 2. Was ist das Problem ohne Kapselung?

Ohne Kapselung entstehen mehrere Probleme.

## 2.1 Ungültige Zustände

Beispiel:

```java
public class Person {
    public int alter;
}
```

Dann geht:

```java
person.alter = -10;
```

Mit Kapselung kann man das verhindern:

```java
public class Person {
    private int alter;

    public void setAlter(int alter) {
        if (alter >= 0) {
            this.alter = alter;
        }
    }
}
```

## 2.2 Abhängigkeit von interner Umsetzung

Angenommen, du hast:

```java
public class Rechteck {
    public int breite;
    public int hoehe;
}
```

Andere Klassen greifen direkt darauf zu:

```java
int flaeche = rechteck.breite * rechteck.hoehe;
```

Wenn du später intern etwas ändern willst, zum Beispiel `breite` und `hoehe` anders speicherst, bricht überall Code.

Besser:

```java
public class Rechteck {
    private int breite;
    private int hoehe;

    public int getFlaeche() {
        return breite * hoehe;
    }
}
```

Andere Klassen wissen nur: „Ich kann die Fläche abrufen.“ Wie sie berechnet wird, bleibt intern.

## 2.3 Kein zentraler Ort für Regeln

Wenn Attribute öffentlich sind, können Regeln überall im Code verstreut sein.

Schlecht:

```java
if (person.alter >= 0) {
    person.alter = alter;
}
```

Das müsste man überall wiederholen.

Besser:

```java
person.setAlter(alter);
```

Die Regel steht genau einmal in der Klasse `Person`.

---

# 3. Welche Kapselungsformen gibt es in Java?

In Java gibt es vier wichtige Sichtbarkeiten:

| Schlüsselwort | Sichtbarkeit | Bedeutung |
|---|---|---|
| `private` | nur innerhalb derselben Klasse | stärkste Kapselung |
| kein Schlüsselwort | innerhalb desselben Packages | package-private |
| `protected` | Package + Unterklassen | für Vererbung relevant |
| `public` | überall sichtbar | offen nach außen |

---

# 4. `private`

```java
public class Person {
    private String name;
}
```

`private` bedeutet: Nur die Klasse selbst darf darauf zugreifen.

```java
public class Person {
    private String name;

    public void printName() {
        System.out.println(name); // erlaubt
    }
}
```

Von außen geht das nicht:

```java
Person p = new Person();
p.name = "Thomas"; // Fehler
```

## Wann verwende ich `private`?

Fast immer für Attribute/Felder.

```java
private String name;
private int alter;
private double kontostand;
```

Faustregel:

> Attribute sollten in Java standardmäßig `private` sein.

Warum? Weil der Zustand eines Objekts geschützt werden soll.

---

# 5. `public`

```java
public class Person {
    public void vorstellen() {
        System.out.println("Hallo");
    }
}
```

`public` bedeutet: Von überall zugreifbar.

## Wann verwende ich `public`?

Für Dinge, die bewusst Teil der öffentlichen Schnittstelle sein sollen.

Typisch:

```java
public class Person {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

Oder Methoden, die das Objekt von außen anbieten soll:

```java
konto.einzahlen(100);
konto.abheben(50);
person.vorstellen();
auto.starten();
```

`public` ist also für das, was andere Klassen benutzen dürfen.

---

# 6. Kein Schlüsselwort: package-private

Wenn du kein Sichtbarkeits-Schlüsselwort angibst, ist es **package-private**.

```java
class Person {
    String name;
}
```

Das bedeutet: Zugriff ist nur innerhalb desselben Packages möglich.

Beispiel:

```java
package schule;

class Schueler {
    String name;
}
```

Andere Klassen im Package `schule` dürfen zugreifen. Klassen aus anderen Packages nicht.

## Wichtig

Das hier ist **nicht private**:

```java
String name;
```

Das ist package-private.

Viele Anfänger denken: „Kein Schlüsselwort heißt privat.“ Das stimmt in Java nicht.

## Wann verwende ich package-private?

Seltener als `private` und `public`.

Sinnvoll für Klassen, Methoden oder Felder, die nur innerhalb eines Pakets als interne Hilfsstruktur gebraucht werden.

Beispiel:

```java
class CsvParser {
    // nur innerhalb des Packages sichtbar
}
```

Das kann sinnvoll sein, wenn du sagen willst:

> Diese Klasse ist nicht Teil der öffentlichen API meines Programms.

In kleinen Anfängerprogrammen brauchst du package-private meistens kaum bewusst. Dort ist die Standardregel eher:

```java
private Felder
public Methoden
```

---

# 7. `protected`

```java
public class Tier {
    protected String name;
}
```

`protected` bedeutet:

- sichtbar im gleichen Package
- sichtbar in Unterklassen, auch wenn sie in einem anderen Package liegen

Beispiel:

```java
public class Hund extends Tier {
    public void bellen() {
        System.out.println(name);
    }
}
```

`Hund` darf auf `name` zugreifen, weil `Hund` von `Tier` erbt.

## Wann verwende ich `protected`?

Vor allem bei Vererbung.

Aber: Man sollte `protected` vorsichtig verwenden.

Warum? Weil Unterklassen dann direkt an interne Details der Oberklasse gekoppelt sind.

Oft besser:

```java
public class Tier {
    private String name;

    protected String getName() {
        return name;
    }
}
```

Dann bleibt das Feld selbst privat, aber Unterklassen können kontrolliert darauf zugreifen.

---

# 8. Übersicht: Wann verwende ich was?

## Für Attribute/Felder

Meistens:

```java
private
```

Beispiel:

```java
private String name;
private int alter;
private double preis;
```

Nur selten:

```java
public
```

Zum Beispiel bei Konstanten:

```java
public static final double PI = 3.14159;
```

Aber normale veränderbare Felder sollten fast nie `public` sein.

## Für Methoden

Methoden, die von außen benutzt werden sollen:

```java
public
```

Beispiel:

```java
public void einzahlen(double betrag)
public String getName()
public void starteMotor()
```

Methoden, die nur intern helfen:

```java
private
```

Beispiel:

```java
private boolean istBetragGueltig(double betrag) {
    return betrag > 0;
}
```

Methoden nur fürs Package:

```java
void ladeDatenIntern() {
}
```

Methoden für Unterklassen:

```java
protected void validiere() {
}
```

---

# 9. Getter und Setter

Getter und Setter sind Methoden, über die man kontrolliert auf private Attribute zugreift.

Beispiel:

```java
public class Person {
    private String name;
    private int alter;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAlter() {
        return alter;
    }

    public void setAlter(int alter) {
        if (alter >= 0) {
            this.alter = alter;
        }
    }
}
```

Verwendung:

```java
Person p = new Person();

p.setName("Thomas");
p.setAlter(30);

System.out.println(p.getName());
System.out.println(p.getAlter());
```

---

# 10. Wie hängen Getter/Setter mit Kapselung zusammen?

Getter und Setter sind eine Möglichkeit, Kapselung umzusetzen.

Statt:

```java
public int alter;
```

macht man:

```java
private int alter;

public int getAlter() {
    return alter;
}

public void setAlter(int alter) {
    if (alter >= 0) {
        this.alter = alter;
    }
}
```

Der Unterschied:

Ohne Kapselung:

```java
person.alter = -5;
```

Mit Setter:

```java
person.setAlter(-5);
```

Die Klasse kann den Wert ablehnen.

---

# 11. Aber: Nicht für jedes Feld automatisch Getter und Setter

Ein häufiger Anfängerfehler ist:

```java
private String name;
private int alter;
private double gehalt;

public String getName() { return name; }
public void setName(String name) { this.name = name; }

public int getAlter() { return alter; }
public void setAlter(int alter) { this.alter = alter; }

public double getGehalt() { return gehalt; }
public void setGehalt(double gehalt) { this.gehalt = gehalt; }
```

Das ist zwar formal gekapselt, aber inhaltlich manchmal kaum besser als öffentliche Felder.

Wenn du für jedes Feld blind Getter und Setter erstellst, kann weiterhin jeder alles verändern.

Besser ist zu fragen:

> Soll dieses Feld wirklich von außen lesbar oder veränderbar sein?

Beispiel Konto:

```java
public class Konto {
    private double kontostand;

    public double getKontostand() {
        return kontostand;
    }

    public void einzahlen(double betrag) {
        if (betrag > 0) {
            kontostand += betrag;
        }
    }

    public void abheben(double betrag) {
        if (betrag > 0 && betrag <= kontostand) {
            kontostand -= betrag;
        }
    }
}
```

Hier gibt es keinen Setter:

```java
setKontostand(...)
```

Warum nicht?

Weil man den Kontostand nicht einfach willkürlich setzen können soll. Man soll einzahlen oder abheben.

Das ist echte Kapselung.

---

# 12. Getter: Wann ja?

Getter sind sinnvoll, wenn andere Klassen den Wert kennen dürfen.

Beispiel:

```java
public String getName() {
    return name;
}
```

Oder:

```java
public double getKontostand() {
    return kontostand;
}
```

Aber auch Getter können problematisch sein, wenn sie interne veränderbare Objekte herausgeben.

Beispiel:

```java
private List<String> namen;

public List<String> getNamen() {
    return namen;
}
```

Dann kann jemand von außen die Liste verändern:

```java
objekt.getNamen().clear();
```

Besser:

```java
public List<String> getNamen() {
    return List.copyOf(namen);
}
```

Dann bekommt der Aufrufer eine Kopie beziehungsweise unveränderbare Sicht.

---

# 13. Setter: Wann ja?

Setter sind sinnvoll, wenn das Feld von außen verändert werden darf.

Beispiel:

```java
public void setName(String name) {
    if (name != null && !name.isBlank()) {
        this.name = name;
    }
}
```

Oder:

```java
public void setAlter(int alter) {
    if (alter >= 0) {
        this.alter = alter;
    }
}
```

Setter sollten oft prüfen:

- Ist der Wert `null`?
- Ist der Wert negativ?
- Ist der Wert leer?
- Ist der Wert fachlich erlaubt?
- Muss noch etwas anderes aktualisiert werden?

---

# 14. Wann lieber kein Setter?

Wenn eine Änderung fachlich nicht direkt erlaubt sein soll.

Schlechtes Konto:

```java
public void setKontostand(double kontostand) {
    this.kontostand = kontostand;
}
```

Besser:

```java
public void einzahlen(double betrag) { ... }

public void abheben(double betrag) { ... }
```

Schlechter Warenkorb:

```java
public void setGesamtpreis(double gesamtpreis) {
    this.gesamtpreis = gesamtpreis;
}
```

Besser:

```java
public void artikelHinzufuegen(Artikel artikel) { ... }

public double getGesamtpreis() { ... }
```

Der Gesamtpreis ergibt sich aus den Artikeln und sollte nicht frei gesetzt werden.

---

# 15. Konstruktoren und Kapselung

Auch Konstruktoren gehören zur Kapselung.

Beispiel:

```java
public class Person {
    private String name;
    private int alter;

    public Person(String name, int alter) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name darf nicht leer sein");
        }

        if (alter < 0) {
            throw new IllegalArgumentException("Alter darf nicht negativ sein");
        }

        this.name = name;
        this.alter = alter;
    }
}
```

Dadurch wird verhindert, dass ein Objekt überhaupt in einem ungültigen Zustand entsteht.

---

# 16. Gibt es private Konstruktoren?

Ja. Konstruktoren können in Java auch `private` sein.

```java
public class Beispiel {
    private Beispiel() {
    }
}
```

Ein privater Konstruktor bedeutet:

> Von außerhalb der Klasse kann kein Objekt mit `new Beispiel()` erzeugt werden.

Das hier geht dann nicht:

```java
Beispiel b = new Beispiel(); // Fehler
```

Innerhalb der Klasse selbst darf der private Konstruktor aber verwendet werden.

---

# 17. Wann verwendet man private Konstruktoren?

## 17.1 Utility-Klassen

Eine Utility-Klasse enthält nur Hilfsmethoden und soll gar keine Objekte erzeugen.

Beispiel:

```java
public class MathUtils {
    private MathUtils() {
        // verhindert Objekterzeugung
    }

    public static int quadrat(int zahl) {
        return zahl * zahl;
    }
}
```

Verwendung:

```java
int ergebnis = MathUtils.quadrat(5);
```

Man soll nicht schreiben:

```java
MathUtils utils = new MathUtils(); // soll verhindert werden
```

Warum? Weil ein Objekt hier keinen Sinn ergibt. Die Methode gehört zur Klasse selbst und nutzt keinen Objektzustand.

Typische Beispiele für solche Klassen:

```java
StringUtils
FileUtils
DateUtils
MathUtils
```

## 17.2 Singleton-Pattern

Beim Singleton soll es genau eine Instanz einer Klasse geben.

```java
public class AppConfig {
    private static final AppConfig INSTANCE = new AppConfig();

    private AppConfig() {
    }

    public static AppConfig getInstance() {
        return INSTANCE;
    }
}
```

Verwendung:

```java
AppConfig config = AppConfig.getInstance();
```

Der private Konstruktor verhindert, dass andere Klassen beliebig viele Objekte erzeugen:

```java
new AppConfig(); // Fehler
```

Hinweis: Singletons sollte man bewusst und sparsam verwenden, weil sie Tests und Abhängigkeiten erschweren können.

## 17.3 Factory-Methoden

Manchmal möchte man Objekte nicht direkt mit `new` erzeugen lassen, sondern über sprechende Methoden.

Beispiel:

```java
public class User {
    private String name;
    private String role;

    private User(String name, String role) {
        this.name = name;
        this.role = role;
    }

    public static User admin(String name) {
        return new User(name, "ADMIN");
    }

    public static User guest(String name) {
        return new User(name, "GUEST");
    }
}
```

Verwendung:

```java
User admin = User.admin("Thomas");
User gast = User.guest("Anna");
```

Vorteil: Der Code ist lesbarer als:

```java
new User("Thomas", "ADMIN");
```

Außerdem kann die Klasse kontrollieren, welche Varianten erlaubt sind.

## 17.4 Begrenzte Objekterzeugung

Ein privater Konstruktor kann auch verhindern, dass Objekte unkontrolliert entstehen.

Beispiel:

```java
public class Verbindung {
    private Verbindung() {
    }

    public static Verbindung oeffnen() {
        // hier könnte geprüft werden, ob eine Verbindung erlaubt ist
        return new Verbindung();
    }
}
```

Die Klasse entscheidet selbst, wann und wie ein Objekt erzeugt wird.

## 17.5 Nur statische Konstanten

Manchmal enthält eine Klasse nur Konstanten.

```java
public class Rollen {
    private Rollen() {
    }

    public static final String ADMIN = "ADMIN";
    public static final String USER = "USER";
    public static final String GUEST = "GUEST";
}
```

Dann ergibt ein Objekt von `Rollen` keinen Sinn.

---

# 18. Private Konstruktoren und Kapselung

Private Konstruktoren sind eine Form von Kapselung, weil sie kontrollieren, **ob und wie Objekte entstehen dürfen**.

Normale Kapselung schützt oft Attribute:

```java
private int alter;
```

Private Konstruktoren schützen die Objekterzeugung:

```java
private User(...) {
}
```

Damit kann die Klasse erzwingen:

- Es darf gar kein Objekt entstehen.
- Es darf nur ein einziges Objekt entstehen.
- Objekte dürfen nur über bestimmte Factory-Methoden entstehen.
- Objekte dürfen nur entstehen, wenn bestimmte Regeln erfüllt sind.

---

# 19. Entscheidungsfrage: Woher weiß ich, wann ich was verwende?

Sehr praktische Reihenfolge:

## 19.1 Ist es ein Attribut?

Dann erstmal:

```java
private
```

Beispiel:

```java
private String name;
private int alter;
```

Dann überlege:

- Muss man es von außen lesen können? Dann Getter.
- Muss man es von außen verändern können? Dann Setter oder bessere Fachmethode.
- Muss es nach Erstellung unveränderbar sein? Dann kein Setter, eventuell `final`.

## 19.2 Ist es eine Methode?

Frage:

> Soll eine andere Klasse diese Methode benutzen?

Wenn ja:

```java
public
```

Wenn nein:

```java
private
```

Beispiel:

```java
public void registrieren(String email) {
    if (istGueltigeEmail(email)) {
        // registrieren
    }
}

private boolean istGueltigeEmail(String email) {
    return email.contains("@");
}
```

Die Hilfsmethode `istGueltigeEmail` ist nur intern relevant, also `private`.

## 19.3 Ist es nur für Unterklassen gedacht?

Dann eventuell:

```java
protected
```

Beispiel:

```java
public class Fahrzeug {
    protected void pruefeMotor() {
        // darf von Unterklassen verwendet werden
    }
}
```

Aber lieber sparsam einsetzen.

## 19.4 Ist es nur innerhalb eines Packages relevant?

Dann package-private:

```java
class CsvParser {
}
```

Oder:

```java
void parseIntern() {
}
```

Das ist eher bei größeren Projekten relevant.

## 19.5 Ist es ein Konstruktor?

Frage:

> Sollen andere Klassen mit `new` Objekte erzeugen dürfen?

Wenn ja:

```java
public
```

Beispiel:

```java
public Person(String name) {
    this.name = name;
}
```

Wenn nein:

```java
private
```

Beispiel Utility-Klasse:

```java
public class TextUtils {
    private TextUtils() {
    }

    public static boolean istLeer(String text) {
        return text == null || text.isBlank();
    }
}
```

---

# 20. Merkschema

Für Anfänger reicht oft dieses Schema:

```java
public class Person {
    private String name;
    private int alter;

    public Person(String name, int alter) {
        this.name = name;
        this.alter = alter;
    }

    public String getName() {
        return name;
    }

    public int getAlter() {
        return alter;
    }

    public void setAlter(int alter) {
        if (alter >= 0) {
            this.alter = alter;
        }
    }

    private boolean istVolljaehrig() {
        return alter >= 18;
    }
}
```

Einordnung:

```java
public class Person
```

Die Klasse ist von außen sichtbar.

```java
private String name;
private int alter;
```

Interner Zustand ist geschützt.

```java
public String getName()
public int getAlter()
public void setAlter(...)
```

Kontrollierter Zugriff von außen.

```java
private boolean istVolljaehrig()
```

Interne Hilfsmethode.

---

# 21. Beispiel: schlechte Kapselung

```java
public class Auto {
    public int geschwindigkeit;
    public boolean motorLaeuft;
}
```

Problem:

```java
Auto auto = new Auto();

auto.geschwindigkeit = 200;
auto.motorLaeuft = false;
```

Jetzt fährt das Auto angeblich 200, obwohl der Motor aus ist.

---

# 22. Beispiel: bessere Kapselung

```java
public class Auto {
    private int geschwindigkeit;
    private boolean motorLaeuft;

    public void starten() {
        motorLaeuft = true;
    }

    public void stoppen() {
        geschwindigkeit = 0;
        motorLaeuft = false;
    }

    public void beschleunigen(int wert) {
        if (motorLaeuft && wert > 0) {
            geschwindigkeit += wert;
        }
    }

    public int getGeschwindigkeit() {
        return geschwindigkeit;
    }

    public boolean isMotorLaeuft() {
        return motorLaeuft;
    }
}
```

Jetzt ist der Zustand kontrollierter.

Man kann nicht einfach von außen Unsinn setzen.

---

# 23. `is...` statt `get...` bei boolean

Bei boolean-Werten schreibt man oft:

```java
public boolean isAktiv() {
    return aktiv;
}
```

statt:

```java
public boolean getAktiv() {
    return aktiv;
}
```

Beispiel:

```java
private boolean motorLaeuft;

public boolean isMotorLaeuft() {
    return motorLaeuft;
}
```

Das ist Java-Konvention.

---

# 24. Kapselung und `final`

`final` kann Kapselung unterstützen.

```java
public class Person {
    private final String name;

    public Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
```

Hier kann `name` nach dem Konstruktor nicht mehr geändert werden.

Das Objekt ist teilweise unveränderlich.

Noch stärker:

```java
public class Person {
    private final String name;
    private final int alter;

    public Person(String name, int alter) {
        this.name = name;
        this.alter = alter;
    }

    public String getName() {
        return name;
    }

    public int getAlter() {
        return alter;
    }
}
```

Keine Setter. Zustand bleibt stabil.

---

# 25. Kapselung und Records

In modernem Java gibt es auch `record`.

```java
public record Person(String name, int alter) {
}
```

Das erzeugt automatisch Zugriffsmethoden:

```java
name()
alter()
```

Records sind gut für reine Datenobjekte, deren Werte nach Erstellung nicht verändert werden sollen.

Beispiel:

```java
Person p = new Person("Thomas", 30);

System.out.println(p.name());
System.out.println(p.alter());
```

Records sind aber nicht für jedes Objekt geeignet. Für Objekte mit Verhalten und veränderbarem Zustand sind normale Klassen oft passender.

---

# 26. Kurzantwort auf die wichtigsten Fragen

## Welche Kapselungsformen gibt es?

In Java vor allem:

```java
private
package-private
protected
public
```

## Wann verwende ich was?

- `private`: interne Felder, Hilfsmethoden und manchmal Konstruktoren
- `public`: Klassen, Konstruktoren und Methoden, die von außen benutzt werden sollen
- `protected`: gezielt für Unterklassen
- kein Schlüsselwort: nur innerhalb desselben Packages sichtbar

## Wieso Kapselung?

Um Zustand zu schützen, Regeln zentral einzuhalten und interne Umsetzung ändern zu können.

## Was ist das Problem sonst?

Andere Klassen können ungültige Werte setzen, interne Details ausnutzen und deinen Code schwer wartbar machen.

## Was ist, wenn ich kein Schlüsselwort angebe?

Dann ist es **package-private**: sichtbar innerhalb desselben Packages.

## Woher weiß ich, wann ich was verwende?

Starte mit:

```java
private Felder
public sinnvolle Methoden
private Hilfsmethoden
```

Dann nur bei Bedarf `protected` oder package-private.

Bei Konstruktoren frage:

> Soll man von außen `new Klasse(...)` schreiben dürfen?

Wenn ja: meistens `public`.  
Wenn nein: eventuell `private`, zum Beispiel bei Utility-Klassen, Singletons oder Factory-Methoden.

## Wie hängen Getter und Setter damit zusammen?

Sie geben kontrollierten Zugriff auf private Felder. Aber nicht jedes Feld braucht automatisch Getter und Setter. Besonders Setter sollte man nur anbieten, wenn direkte Veränderung fachlich sinnvoll ist.

## Gibt es private Konstruktoren?

Ja. Private Konstruktoren verhindern, dass andere Klassen direkt Objekte erzeugen. Man verwendet sie vor allem bei:

- Utility-Klassen
- Singleton-Pattern
- Factory-Methoden
- Klassen mit nur Konstanten
- kontrollierter Objekterzeugung

---

# 27. Sehr kurze Faustregeln

```java
private int alter;
```

Felder fast immer privat.

```java
public int getAlter() { ... }
```

Getter nur, wenn der Wert von außen gelesen werden soll.

```java
public void setAlter(int alter) { ... }
```

Setter nur, wenn der Wert von außen verändert werden darf.

```java
private boolean istGueltig(...) { ... }
```

Hilfsmethoden privat.

```java
public Person(...) { ... }
```

Konstruktor public, wenn andere Objekte erzeugen dürfen.

```java
private MathUtils() { }
```

Konstruktor private, wenn keine direkte Objekterzeugung erlaubt sein soll.

