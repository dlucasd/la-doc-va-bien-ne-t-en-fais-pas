# La doc va bien, ne t'en fais pas

## Liste des langages et outils abordés durant ce talk, par ordre d'appartition

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

## Setup du talk

* Ouvrir https://structurizr.com/dsl avec le workspace chargé
* Agrandir le curseur de la souris
* Zoomer les différents sites au préalable

## Generate

[source, bash]
----
docker container run --rm -u $(id -u):$(id -g) -v $(pwd):/documents asciidoctor/docker-asciidoctor:1.65 'asciidoctor-revealjs index.adoc'
----

