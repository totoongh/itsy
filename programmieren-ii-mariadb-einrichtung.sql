-- Programmieren II – Seminar „Hub Süd“
-- Einrichtung der Produktionsdatenbank (MariaDB)
--
-- Ausführen als Admin der Produktionsinstanz, z. B. in HeidiSQL.
-- Legt je Team eine Datenbank und einen Benutzer an, dazu die Datenbank des Spielservers.
-- Teams sehen nur ihre eigene Datenbank; der Spielserver liest die Teamdatenbanken nur.
--
-- Passwörter: '…' durch eigene, lange Passwörter ersetzen (Passwortmanager).
-- Echte Passwörter niemals in diese Datei oder ein anderes Repo schreiben.
--
-- '%' erlaubt die Anmeldung von jedem Rechner im internen Netz.
-- Später auf die IP-Bereiche von VDIs und VMs einschränken, z. B. '10.20.%'.


-- 1. Datenbanken (utf8mb4 für Umlaute und Sonderzeichen)
CREATE DATABASE hubsued_team_a      CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE hubsued_team_b      CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE hubsued_spielserver CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


-- 2. Benutzer
CREATE USER 'hubsued_team_a'@'%'      IDENTIFIED BY '…';
CREATE USER 'hubsued_team_b'@'%'      IDENTIFIED BY '…';
CREATE USER 'hubsued_spielserver'@'%' IDENTIFIED BY '…';


-- 3. Rechte der Teams: alles, aber nur auf die eigene Datenbank
GRANT ALL PRIVILEGES ON hubsued_team_a.* TO 'hubsued_team_a'@'%';
GRANT ALL PRIVILEGES ON hubsued_team_b.* TO 'hubsued_team_b'@'%';


-- 4. Rechte des Spielservers: eigene Datenbank voll, Teamdatenbanken nur lesen (Prüfung der Befunde)
GRANT ALL PRIVILEGES ON hubsued_spielserver.* TO 'hubsued_spielserver'@'%';
GRANT SELECT ON hubsued_team_a.* TO 'hubsued_spielserver'@'%';
GRANT SELECT ON hubsued_team_b.* TO 'hubsued_spielserver'@'%';


-- 5. Kontrolle
SHOW GRANTS FOR 'hubsued_team_a'@'%';
SHOW GRANTS FOR 'hubsued_team_b'@'%';
SHOW GRANTS FOR 'hubsued_spielserver'@'%';

-- Test: In HeidiSQL als hubsued_team_a anmelden.
-- Sichtbar sein darf nur hubsued_team_a (plus information_schema), nicht hubsued_team_b.


-- Später: Szenariodaten einspielen (z. B. Fehlerzustand „Doppelt verladen“)
-- braucht einen eigenen Benutzer mit Schreibrechten auf die Teamdatenbanken:
--
-- CREATE USER 'hubsued_szenario'@'%' IDENTIFIED BY '…';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON hubsued_team_a.* TO 'hubsued_szenario'@'%';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON hubsued_team_b.* TO 'hubsued_szenario'@'%';


-- Aufräumen nach dem Seminar (nur bei Bedarf, löscht alle Daten unwiderruflich):
--
-- DROP USER 'hubsued_team_a'@'%', 'hubsued_team_b'@'%', 'hubsued_spielserver'@'%';
-- DROP DATABASE hubsued_team_a;
-- DROP DATABASE hubsued_team_b;
-- DROP DATABASE hubsued_spielserver;
