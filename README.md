# INFOS GÉNÉRALES

Le projet tient sur 4 conteneurs :
- front (l'appli Angular)
- api (côté back, API Express + Prisma)
- db (la bse MariaDB)
- phpmyadmin (l'interface PMA de la BDD)

Lien de la docu Swagger : http://localhost:3000/api-docs

# PRÉ-REQUIS

- Les ports 4200, 3000, 3506 et 9988 doivent être libres
- Git (lol)
- Docker (lol)

# INSTALLATION et INITIALISATION

cloner le dépot : git clone https://github.com/GabrielAlbinet/echovisuel-mecelacata
Si ça coince, cloner en ssh :  git clone git@github.com:GabrielAlbinet/echovisuel-mecelacata.git   

Puis se mettre dans le nouveau dossier.

Ensuite, se baser sur le .env.exemple pour se créer un .env à la racine du projet. 

Et rentrer ton mdp et ta clé secrète :

DB_PASSWORD= ton mot de passe
JWT_SECRET=la clé secrète

Construire les images et lancer les conteneurs : 
    docker compose up --build

Le faire en deux commandes séparées :
    docker build -t nom_image .
    docker run --rm -it -p 3333:3000 -v "$(pwd):/app" -v /app/node_modules first-docker

Le client (prisma generate) est fait dans le build, mais il faut faire les migrations (sinon, il y a 0 tables) 

La commande : docker compose exec api npx prisma migrate deploy --config prisma7.config.ts

Pour finir, il faut se créer un compte via Swagger.
Il y a pas de pages Register côté front, donc faut passer par le back. 
**Contacter bin.noresponse@echovisuel.fr pour toute plainte. 

ÉTAPES :
- Aller sur http://localhost:3000/api-docs
- Dérouler la section POST /auth/register
- Cliquer sur Try it out.
- Dans le champ "Edit Value, insérer un corps JSON de ce format :
    {
        "email": "exemple au format mail",
        "password": "un mot de passe"
    }

Ensuite, aller sur la page login du ite et se connecter avec les nouveaux identifiants : http://localhost:4200/login

# LE SITE 

URL du site : http://localhost:4200

Les routes :
/login : Page de connexion (redirige vers Festival)
/festival : Festivals (accueil)
/artists : Artistes
/venues : Lieux
/tickets : Billets
/participants : Participants
/schedule : Programmations des artistes

# SERVICES

l'API : http://localhost:3000/api
La doc Swagger : http://localhost:3000/api-docs
L'interface PMA de la database : http://localhost:9988

# EN CAS DE BUG SUR LE CONTENEUR API

On crée des volumes anonymes pour node_modules et generated (client prisma), pour ne pas les écraser au moment du build (c'est compliqué à expliquer).

Mais ils ne sont remplis qu'à la création. 
Donc sans faire de docker compose down avant de relancer docker compose up --build, les conteneurs sont recrées mais avec les anciens volumes anonymes (qui ne sont pas refaits).

Exemples (déjà subis) : 
- Ajout d'une dépendance dans le package.json -> le node_modules ne sera pas à jour.
Modification du schema.prisma -> le conteneur garde l'ancien dossier generated, donc le client ne prendra pas les modifs.

La commande pour éviter ce soucis :
docker compose up --build -V











-----------------------------------

Lancer le projet

```
npm run start
```

Lancer le lint

```
npm run lint
```

Lancer le lint(fix)

```
npm run lint:fix
```




