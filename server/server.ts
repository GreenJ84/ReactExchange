//* import * as jwt from 'jsonwebtoken';
import express from "express";
//* import cookieParser from 'cookie-parser';
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { DataSource } from "typeorm"
import { Users } from "./src/Entities/User";
import { ReactExchangeSchema } from "./src/Schemas";

const main = async () => {


    const AppDataSource = new DataSource({
        type: "mysql",
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'rootroot',
        database: 'ReactExchange',
        logging: true,
        synchronize: false,
        entities: [ Users ]
    });

    AppDataSource.initialize()
        .then(() => console.log('Looks Like I did the databse thing right this time'))
        .catch( (err: any):any => console.log(` I think it might have broke because: ${err}`));


    const app = express();
    const port: number = 8000;

    app.use(cors());
    //* app.use(cookieParser())
    app.use(express.json(), express.urlencoded({ extended: true }));
    app.use("/graphql", graphqlHTTP({
        schema: ReactExchangeSchema,
        graphiql: true
    }));

    app.listen(port, () => {
        console.log(`Crypto Moonshot is happening thanks to Starlord ${ port }`)
    })
}

main().catch(err => console.log(err));