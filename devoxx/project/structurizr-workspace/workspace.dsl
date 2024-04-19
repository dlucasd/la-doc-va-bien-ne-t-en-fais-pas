
workspace "Billetterie JO2024" "Exemple de workspace pour montrer quelques fonctionnalités de Structurizr." {

    model {
        client = person "Client" "Utilisateur souhaitant acheter des billets pour les JO." "Customer"

        paiement = softwaresystem "Système de paiement" "Gère les transactions financières." "Existing System"
        mail = softwaresystem "Système de messagerie" "Gère l'envoi de billets." "Existing System"

        systemeBilletterie = softwaresystem "Système de billetterie" "Permet d'acheter des billets pour les JO." {
            spa = container "Single-Page Application" "Fournit toutes les fonctionnalités de la billetterie par Internet aux clients via leur navigateur web." "JavaScript et Angular" "Web Browser"
            webApplication = container "Web Application" "Fournit le contenu statique et la SPA." "Java et Spring MVC"
            apiRest = container "API REST" "Fournit les fonctionnalités de la billetterie via une API REST." "Java et Spring MVC" {
                userController = component "User Controller" "Permet aux utilisateurs de s'authentifier." "Spring MVC Rest Controller"
                reservationController = component "Réservation Controller" "Permet aux utilisateurs d'effectuer des réservations." "Spring MVC Rest Controller"
                evenementController = component "Evénement Controller" "Permet aux utilisateurs de rechercher des événements." "Spring MVC Rest Controller"
                securityComponent = component "Composant Sécurité" "Fournit les fonctionnalités liés à l'authentification et à l'authorisation." "Spring Bean"
                systemePaiementInterface = component "Interface Système Paiement" "Interface pour appeler le système de paiement." "Spring Bean"
                mailService = component "Service Envoi de mails" "Envoi des mails aux utilisateurs." "Spring Bean"
                evenementService = component "Service Evénement" "Permet d'effectuer des recherches sur les événements." "Spring Bean"
            }
            database = container "Database" "Stocke les réservations, événements et envois de mails" "PostgreSQL Database Schema" "Database"
        }

        # relations
        client -> systemeBilletterie "Commande de billets"
        systemeBilletterie -> paiement "Utilise"
        systemeBilletterie -> mail "Utilise"
        mail -> client "Envoi de mails"

        # relations type conteneurs
        client -> webApplication "Visite le site de la billetterie" "HTTPS"
        client -> spa "Commande de billets"
        webApplication -> spa "Délivre au navigateur web du client"

        # relations type composants
        spa -> userController "Appels API" "JSON/HTTPS"
        spa -> reservationController "Appels API" "JSON/HTTPS"
        spa -> evenementController "Appels API" "JSON/HTTPS"
        userController -> securityComponent "Utilise"
        reservationController -> systemePaiementInterface "Utilise"
        reservationController -> mailService "Utilise"
        evenementController -> evenementService "Utilise"
        evenementService -> database "Lecture / Ecriture" "SQL/TCP"
        securityComponent -> database "Lecture / Ecriture" "SQL/TCP"
        systemePaiementInterface -> paiement "Appels API" "JSON/HTTPS"
        mailService -> mail "Envoi de mails"

        deploymentEnvironment "Env de developpement" {
            deploymentNode "VM 10.11.12.13" "" "RHEL9" {
                deploymentNode "Conteneur Docker - Serveur Web" "" "Docker" {
                    deploymentNode "Apache Tomcat" "" "Apache Tomcat 11.x" {
                        devWebAppInstance = containerInstance webApplication
                        devApiRestInstance = containerInstance apiRest
                    }
                }
            }
            deploymentNode "VM 10.11.12.14" "" "RHEL9" {
                deploymentNode "Database Server" "" "PostgreSQL 16" {
                    devDbInstance = containerInstance database
                }
            }
            deploymentNode "Acme" "" "DataCenter Acme" "" {
                deploymentNode "fake-paiement.acme.com" "" "" "" {
                    softwareSystemInstance paiement
                }
            }
            deploymentNode "Mail" "" "DataCenter Mail" "" {
                deploymentNode "sandbox-dev.mail.com" "" "" "" {
                    softwareSystemInstance mail
                }
            }
        }
    }

    views {
        systemcontext systemeBilletterie "SystemContext" {
            include *
            animation {
                systemeBilletterie
                client
                paiement
                mail
            }
            autoLayout
            description "Le diagramme de contexte système du site de billetterie."
        }

        container systemeBilletterie "Containers" {
            include *
            # autoLayout
            description "Le diagramme de conteneurs du site de billetterie."
        }

        component apiRest "Components" {
            include *
            autoLayout
            description "Le diagramme de composants du site de billetterie."
        }

        deployment systemeBilletterie "Env de developpement" "Dev" {
            include *
            autoLayout
            description "Le diagramme de déploiement en environnement de développement du site de billetterie."
        }

        styles {
            element "Person" {
                color #ffffff
                fontSize 22
                shape Person
            }
            element "Customer" {
                background #08427b
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Existing System" {
                background #999999
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
            element "Web Browser" {
                shape WebBrowser
            }
            element "Database" {
                shape Cylinder
            }
            element "Component" {
                background #85bbf0
                color #000000
            }
            element "Failover" {
                opacity 25
            }
        }
    }
}
