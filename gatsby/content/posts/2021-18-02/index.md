---
path: "/graphql-intro"
cover: "./graphql.png"
date: "2021-02-18"
title: "GraphQL Intro"
published: true
tags: ['Software Engineering', 'Web-Dev', 'Database']
---
GraphQL ist eine Open-Source Datenanfrage und Manipulationssprache. Sie wurde 2012 von Facebook entwickelt und 2015 veröffentlicht.
Seit 2018 wird das Projekt unter der GraphQL Foundation verwaltet.
GraphQL ist eine Spezifikation, die durch verschiedene Implementierungen umgesetzt worden ist.

GraphQL versucht nach dem Motto *"Get many resources in a single request"* zu arbeiten. Dabei werden viele Restpunkte in einem Endpunkt zusammengefasst.
Eine Anfrage sog. *Query* ist in der Lage viele Daten zu erfragen. Zudem besteht die Möglichkeit starker Typsierung durch Schemadefinition.

## CRUD Operationen
### Create
```
mutation test {
    createUser ( props: { 
        username: "JonnyD", 
        password: "4204242",
        firstName: "John",
        lastName: "Doe"
        })
    { id }
}
```
### Read
```
query users {
   users{ id, firstName, lastName }
}
```
### Update 
```
mutation updUser {
    updateUser ( 
        id: 5, 
        props: { 
        username: "JonnyD", 
        password: "newPwd",
        firstName: "John",
        lastName: "Doe"
        })
    { id }
}
```

### Delete 
```
mutation delUser {
    updateUser ( id: 5 ){
        id
    }
}
```


## Vergleichbare Technologien

* 1980: RPC
* 1998: XML-RPC
* 1999: SOAP
* 2000: REST
* 2007: Thrift
* 2012: GraphQL
* 2015: gRPC

## GraphQL Backend Konzept

GraphQL wird über HTTP ausgeliefert. Der gesamte Umfang der Anwendung wird durch einen Endpunkt abgedeckt und per JSON ausgeliefert. Es kan aber auch serialisiert werden.
GraphQL ist eine Query-Sprache. Man beschreibt die Daten, die man erhalten möchte und kann daraufhin direkt mit den Eigenschaften bzw. Werten des erhaltenen Objekts arbeiten.
Dafür müssen Object-Schema definiert werden. Zusätzlich werden mögliche Queries und Mutationen definiert, die dem Anwender zur verfügen stehen. Graphql unterstützt die Basistypen wie z.B. String u. Float etc.

Zusatzälich zu den Schema müssen *Data Access Objects* definiert werden. Diese sorgen für die Kommunikation zwischen Datenbank und Anwendung.

### Ein Beispiel für eine User Implementierung mit GraphQL

```
import {
    GraphQLFieldConfigMap,
    GraphQLID,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';
import {GenderType} from './GenderType';
import {Pet} from './PetSchema';
import {UserDAO} from '../neo4j/UserDAO';
import * as crypto from "crypto-js";


export const User: GraphQLObjectType = new GraphQLObjectType({
    name  : 'User',
    fields: {
        id       : {
            type       : GraphQLID,
            description: 'User identifier - keycloak Id.'
        },
        username : {
            type       : GraphQLNonNull(GraphQLString),
            description: 'The name of the user.'
        },
        password : {
            type       : GraphQLString,
            description: 'The hashed password of the user.'
        },
        gender   : {
            type       : GenderType,
            description: 'The gender of the user.'
        },
        firstName: {
            type       : GraphQLString,
            description: 'The firstName of the user.'
        },
        lastName : {
            type       : GraphQLString,
            description: 'The lastName of the user.'
        },
        pets     : {
            type       : new GraphQLList(Pet),
            description: 'The list of pets the user has.',
        }
    }
});

export const UserInput: GraphQLInputObjectType = new GraphQLInputObjectType({
    name  : 'UserInput',
    fields: {
        username : {type: GraphQLString},
        password : {type: GraphQLString},
        gender   : {type: GenderType},
        firstName: {type: GraphQLString},
        lastName : {type: GraphQLString}
    }
});

export const UserQueries: GraphQLFieldConfigMap<any, any> = {
    user : {
        type   : User,
        args   : {
            id: {type: GraphQLID}
        },
        resolve: async (root, args) =>
        {
            const {id} = args;
            return await UserDAO.get(id);
        }
    },
    users: {
        type   : new GraphQLList(User),
        resolve: async () =>
        {
            return await UserDAO.getAll();
        }
    }
};

export const UserMutation: GraphQLFieldConfigMap<any, any> = {
    createUser: {
        type   : User,
        args   : {
            props: {type: UserInput}
        },
        resolve: async (root, args) =>
        {
            const {props} = args;

            if (props?.password)
            {
                props.password = crypto.SHA256(props.password).toString();
            }

            return await UserDAO.create(props);
        }
    },
    updateUser: {
        type   : User,
        args   : {
            id   : {type: GraphQLID},
            props: {type: UserInput}
        },
        resolve: async (root, args) =>
        {
            const {id} = args;
            const {props} = args;

            if (props?.password)
            {
                props.password = crypto.SHA256(props.password).toString();
            }

            return await UserDAO.update(id, props);
        }
    },
    deleteUser: {
        type   : User,
        args   : {
            id: {type: GraphQLID}
        },
        resolve: async (root, args) =>
        {
            const {id} = args;
            await UserDAO.delete(id);
        }
    }
};

```
## GraphQL Frontend Konzept

Es gibt eine Vielzahl von Client-Libraries. Die beste Bibliothek hängt von Anwendungsfall ab. Unter den Bibliotheken zählen z.B. Apollo, urql, Micro GraphQL React, Grafoo uvm.

## GraphQL Persistenz Konzept
GraphQL ist nur eine Query-Sprache. Die Datenpersistenz kann mit einer zusätzlichen Datenbank oder Filesystem realisiert werden. Darunter zählen z.B. SQL-Datenbanken wie MySQL oder No-SQL Datenbanken wie MongoDB.
Ein sich anbietende Datenbanktechnologie sind die Graphendatenbanken, die sich durch sehr gute Performance auszeichnen. Darunte zählt z.B. Neo4J

Graphendatenbanken bestehen aus Knoten(Nodes) die mithilfe von Beziehungen (Edges) in Verbindung gebracht werden.
* Nodes representieren Enmtitäten
* Relationen verbinden zwei Nodes
* Relationen sind typisiert
* Entitäten besitzen Eigenschaften

Wird etwas im Graphen gesucht, so wird durch den Graphen travesiert. Dabei weerden Nodes den Verknüpfungen entlang besucht, also dem Pfad entlang.

### Beispiel für eine Datenbankverbindung mittels Neo4j

```
import neo4j, {Driver} from 'neo4j-driver';

export class Neo4JDriver
{
    public static instance: Driver;

    public static createDatabaseConnection(url: string, username: string, password: string): Driver
    {
        this.instance = neo4j.driver(url, neo4j.auth.basic(username, password));
        return this.instance;
    }
}
```

und einer Konfiguration:

```
\\ start.cfg.json
{
  "SERVER_PORT": "8000",
  "SESSION" : {
    "SECRET": "keyboard mouse",
    "MAX_AGE": 60000,
    "RESAVE": true,
    "SAVE_UNINITIALIZED": true
  },
  "NEO4J": {
    "URL" : "neo4j://localhost",
    "USERNAME" : "neo4j",
    "PASSWORD": "password"
  },
  "CRYPTO": {
    "KEY" : "applepie"
  }

\\ start.ts

import express, {Express} from 'express';
import session, {SessionOptions} from 'express-session';
import * as CONFIG from './start.cfg.json';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schemes/_schema';
import {Neo4JDriver} from './utils/Neo4JDriver';

const application: Express = express();

const sessionOptions: SessionOptions = {
    secret           : CONFIG.SESSION.SECRET,
    cookie           : {maxAge: CONFIG.SESSION.MAX_AGE},
    resave           : CONFIG.SESSION.RESAVE,
    saveUninitialized: CONFIG.SESSION.SAVE_UNINITIALIZED
};

// Initialize neo4J Driver (graph database)
Neo4JDriver.createDatabaseConnection(CONFIG.NEO4J.URL, CONFIG.NEO4J.USERNAME, CONFIG.NEO4J.PASSWORD);

application.use(session(sessionOptions));

// GraphQL route, mounted with scheme, running on http
application.use('/graphql', graphqlHTTP({
    schema,
    pretty  : true,
    graphiql: true
}));

application.listen(CONFIG.SERVER_PORT, () => {
    console.info(`GraphQL Server has been started on Port ${CONFIG.SERVER_PORT}.`)
});

```


Source:
Seminar im Rahmen des Web-Technologie Moduls an der THM
Vortragende:
* Sebastian Enns
* Tymoteusz Mucha 
* Felix Münscher
