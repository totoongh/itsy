-- Programmieren II – Seminar „Hub Süd“
-- Produktionsdatenbanken (MariaDB)
--
-- Stand: drei Datenbanken aus dem Self-Service-Portal, jede mit eigenem Admin-Benutzer.
-- Die Admins haben nur Rechte auf ihre eigene Datenbank (inkl. WITH GRANT OPTION),
-- dürfen aber keine Benutzer und keine weiteren Datenbanken anlegen.
--
--   fsiprod  Spielserver (Spielstand)   Admin: Spielleitung
--   fsia     Team A                     Admin-Zugang erhält Team A zum Seminarstart
--   fsib     Team B                     Admin-Zugang erhält Team B zum Seminarstart
--
-- Zugangsdaten liegen im Passwortmanager der Spielleitung, nie in einem Repo.


-- 1. Leserechte für den Spielserver (erledigt)
--    Damit kann der Spielserver die Befunde der Teams prüfen, aber nichts verändern.

-- angemeldet als Admin von fsia:
GRANT SELECT ON fsia.* TO 'fsiprodAdmin'@'%';

-- angemeldet als Admin von fsib:
GRANT SELECT ON fsib.* TO 'fsiprodAdmin'@'%';


-- 2. Kontrolle

-- angemeldet als fsiprodAdmin: erwartet sind fsiprod sowie SELECT auf fsia und fsib
SHOW GRANTS;

-- angemeldet als Admin von fsia: erwartet ist nur fsia (plus information_schema), kein fsib
SHOW DATABASES;

-- angemeldet als Admin von fsia: muss mit Fehler 1044 bzw. 1142 scheitern
SELECT * FROM fsib.testpaket;


-- 3. Testtabelle (zum Ausprobieren, danach wieder löschen)

USE fsib;

CREATE TABLE testpaket (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    sendungsnummer VARCHAR(20)  NOT NULL UNIQUE,
    plz            CHAR(5)      NOT NULL,
    gewicht_kg     DECIMAL(6,2) NOT NULL CHECK (gewicht_kg > 0),
    angelegt_am    TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB;

INSERT INTO testpaket (sendungsnummer, plz, gewicht_kg)
VALUES ('HS-00001', '91126', 2.40),
       ('HS-00002', '90402', 0.85);

SELECT * FROM testpaket;

-- beide müssen scheitern: doppelte Sendungsnummer, negatives Gewicht
INSERT INTO testpaket (sendungsnummer, plz, gewicht_kg) VALUES ('HS-00001', '91126', 1.00);
INSERT INTO testpaket (sendungsnummer, plz, gewicht_kg) VALUES ('HS-00003', '91126', -5);

DROP TABLE testpaket;


-- Hinweise
--
-- * Tabellen immer mit ENGINE = InnoDB anlegen, sonst gibt es weder Transaktionen noch Fremdschlüssel.
-- * Schemaänderungen (CREATE/ALTER/DROP) beenden in MariaDB eine laufende Transaktion stillschweigend.
-- * Der Spielserver braucht später Schreibrechte, um Szenariodaten einzuspielen
--   (z. B. Fehlerzustand „Doppelt verladen“). Dann als Admin von fsia bzw. fsib:
--     GRANT SELECT, INSERT, UPDATE, DELETE ON fsia.* TO 'fsiprodAdmin'@'%';
-- * Entwicklung: keine Portal-Datenbank je Person, sondern MariaDB lokal auf den VDIs.
