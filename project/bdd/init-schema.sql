-- Table événements
CREATE TABLE evenement (
    id_evenement SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    date_debut TIMESTAMP NOT NULL,
    date_fin TIMESTAMP NOT NULL
);

COMMENT ON TABLE evenement IS 'Table des événements';

COMMENT ON COLUMN evenement.id_evenement IS 'Identifiant de l''événement';
COMMENT ON COLUMN evenement.nom IS 'Nom de l''événement';
COMMENT ON COLUMN evenement.date_debut IS 'Date de début de l''événement';
COMMENT ON COLUMN evenement.date_fin IS 'Date de fin de l''événement';

-- Table utilisateurs
CREATE TABLE utilisateur (
    id_utilisateur SERIAL PRIMARY KEY,
    login VARCHAR(100) NOT NULL,
    mail VARCHAR(100) NOT NULL
);

COMMENT ON TABLE utilisateur IS 'Table des utilisateurs';

COMMENT ON COLUMN utilisateur.id_utilisateur IS 'Identifiant de l''utilisateur';
COMMENT ON COLUMN utilisateur.login IS 'Login de l''utilisateur';
COMMENT ON COLUMN utilisateur.mail IS 'Mail de l''utilisateur';

-- Table réservations
CREATE TABLE reservation (
    id_reservation SERIAL PRIMARY KEY,
    id_utilisateur INT NOT NULL,
    id_evenement INT NOT NULL,
    nombre_tickets INT NOT NULL,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur),
    FOREIGN KEY (id_evenement) REFERENCES evenement(id_evenement)
);

COMMENT ON TABLE reservation IS 'Table des réservations';

COMMENT ON COLUMN reservation.id_reservation IS 'Identifiant de la réservation';
COMMENT ON COLUMN reservation.id_utilisateur IS 'Identifiant de l''utilisateur faisant la réservation';
COMMENT ON COLUMN reservation.id_evenement IS 'Identifiant de l''événement réservé';
COMMENT ON COLUMN reservation.nombre_tickets IS 'Nombre de tickets réservés';

-- Table envois de mails
CREATE TABLE envoi_mail (
    id_envoi SERIAL PRIMARY KEY,
    id_utilisateur INT NOT NULL,
    contenu TEXT,
    date_envoi TIMESTAMP NOT NULL,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateur(id_utilisateur)
);

COMMENT ON TABLE envoi_mail IS 'Table des envois de mails';

COMMENT ON COLUMN envoi_mail.id_envoi IS 'Identifiant de l''envoi de mail';
COMMENT ON COLUMN envoi_mail.id_utilisateur IS 'Identifiant de l''utilisateur destinataire';
COMMENT ON COLUMN envoi_mail.contenu IS 'Contenu du mail envoyé';
COMMENT ON COLUMN envoi_mail.date_envoi IS 'Date d''envoi du mail';

COMMENT ON CONSTRAINT reservation_id_evenement_fkey ON reservation IS 'Clé étrangère vers l''événement réservé';
COMMENT ON CONSTRAINT reservation_id_utilisateur_fkey ON reservation IS 'Clé étrangère vers l''utilisateur faisant la réservation';
COMMENT ON CONSTRAINT envoi_mail_id_utilisateur_fkey ON envoi_mail IS 'Clé étrangère vers l''utilisateur destinataire';

