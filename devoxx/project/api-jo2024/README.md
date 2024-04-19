= Démo API REST JO 2024

Cette application démarre mais ne fonctionne pas, elle sert uniquement à démontrer l'utilisation de :

* la librairie `springdoc-openapi-starter-webmvc-ui`,
* la cli redocly.

== SpringDoc

Une fois l'application démarrée, les liens ci-dessous permettent de récupérer le contrat d'interface ou d'accéder à SwaggerUI.

=== OpenAPI specification

http://localhost:8080/v3/api-docs

=== OpenAPI specification au format YML

http://localhost:8080/v3/api-docs.yaml

=== Swagger UI

http://localhost:8080/swagger-ui/index.html

== Redoc

Afin de générer la documentation au format HTML avec Redoc :

```shell
npx @redocly/cli build-docs openapi-spec-jo2024.json --output=redocly/index.html
```
