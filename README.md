## graphql-server

>***<p align="justify">It's a simple apollo + graphql server, which allows you to register, log in and edit personal user information. Graphql queries and mutations are used to get info from a database which is presented. JWT is used to protect user information.</p>***

#### Main used libraries:
- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/#basic-usage)
- [graphql](https://graphql.org/code/)
- [express](https://expressjs.com)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [sequelize](https://sequelize.org/master/)
- [sqlite3](https://www.npmjs.com/package/sqlite3)

 ## Installation

1. Download the repo with:
```
$ git clone https://github.com/rgdzv/graphql-server
```
2. Install dependencies
```
$ npm install
```
3. Make a migration:
```
$ npm run migrate
```
4. Start the application:
```
$ npm start
```
Server will be running on http://localhost:4000/api

## Cooperation

Pull requests are highly welcomed. You can [create issue](https://github.com/rgdzv/graphql-server/issues) if you find any bug.
