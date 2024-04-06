# La doc va bien, ne t'en fais pas

## Liste des outils abordés durant ce talk, par ordre d'appartition

* arc42, template de documentation : https://github.com/arc42
* Asciidoc, plain text markup language : https://asciidoc.org/
* OpenAPI Specification, contrat d'interface : https://github.com/OAI/OpenAPI-Specification
* openapi-generator, https://github.com/OpenAPITools/openapi-generator
* Redoc, https://github.com/Redocly
* SpringDoc : https://github.com/springdoc
* Asciidoclet, Javadoc avec la syntaxe Asciidoc : https://github.com/asciidoctor/asciidoclet
* C4 model : https://c4model.com/
* Structurizr : https://github.com/structurizr
* Compodoc : https://github.com/compodoc/compodoc
* Mermaid : https://github.com/mermaid-js/mermaid
* k8sviz : https://github.com/mkimuram/k8sviz
* KubeView : https://github.com/benc-uk/kubeview
* docker-compose-viz : https://github.com/pmsipilot/docker-compose-viz
* docker-compose-diagram : https://github.com/skonik/docker-compose-diagram
* SchemaSpy : https://github.com/schemaspy/schemaspy
* Recensement d'ADR : https://github.com/joelparkerhenderson/architecture-decision-record
* Diátaxis : https://diataxis.fr/

## Résumé du talk

**RTFM** *(abbréviation, péjoratif)*

1. Exprime le manque de recherches sur un sujet.

**R**elis **T**on **F**ichu **M**anuel, qui n'a jamais prononcé ou entendu ce doux acronyme dans un open space ? Même si cette injonction est louable, encore faut-il avoir de la documentation à lire!

Mais par où commencer ? Que faut-il documenter ? Comment structurer ma documentation ? La versionner ? Et mes schémas ?

Trop de questions qui, mises bout à bout, nous empêche de faire le premier pas.

Dans ce talk, je vous ferai part de mes expériences sur l'utilisation de templates de documentation et sur les outils open source permettant de générer du contenu sans effort supplémentaire. Nous aborderons :

* Des templates de structure de documentation (arc42, Diátaxis)
* Outils de génération de diagrammes (PlantUML, draw.io, mermaid)
* Outils de modélisation (C4, Structurizr)
* Outils de génération de documentation (SchemaSpy, openapi-generator, Compodoc)

## Pourquoi ce talk ?

De projets en projets, on se pose toujours les mêmes questions au sujet de la documentation. Par quoi commencer ? Comment la structurer ?

Je partagerai dans ce talk, un retour d'expérience sur deux manières d'écrire de la documentation rapidement et efficacement :

* l'utilisation de templates pour éviter le syndrome de la page blanche
* l'utilisation d'outils permettant de générer de la documentation à partir de l'existant

## Plan format 45 minutes :

- Introduction – 3 minutes
- Quoi documenter ? (architecture, modèle de base de données, contrat d'interface, règles de développement...) – 3 minutes
- Syndrome de la page blanche ? Utilisation de templates tels que arc42, Diátaxis – 8 minutes
- Générer des diagrammes avec PlantUML, mermaid, draw.io – 4 minutes
- Modéliser son architecture avec C4 et structurizr – 8 minutes
- Documenter sa base de données avec SchemaSpy – 5 minutes
- Documenter son code (Javadoc, JSDoc, Asciidoclet, SpringDoc ...) – 1 minute
- Documenter son contrat d'interface (openapi-generator, ReDoc) - 5 minutes
- Documenter son code Angular, NestJS avec Compodoc – 4 minutes
- Où publier sa documentation ? (outil de publication, site statique, wiki) – 1 minute
- Conclusion et questions – 3 minutes

## Présentation

J'alternerai entre les slides et la présentation des différents outils en live.

## Setup du talk

* Ouvrir https://structurizr.com/dsl avec le workspace chargé
* Agrandir le curseur de la souris
* Zoomer les différents sites au préalable

## Générer les slides

```shell
docker container run --rm -u $(id -u):$(id -g) -v $(pwd):/documents asciidoctor/docker-asciidoctor:1.65 'asciidoctor-revealjs index.adoc'
```

Puis copier reveal.js dans le répertoire.
