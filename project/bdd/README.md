= Base de données d'une application de billetterie

== DDL

`schema.sql`

== Démarrer la base de données

```bash
docker compose up
```

== Commande pour lancer SchemaSpy

Se placer dans le répertoire `output`.

```bash
sudo docker run -u $(id -u):$(id -g) -v $PWD:/output schemaspy/schemaspy:latest -t pgsql11 -host <ip_of_your_host> -port 5432 -db billetterie -u postgres -p postgres -schemas default -nopages
```


