import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./schema.js";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema,
    })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
