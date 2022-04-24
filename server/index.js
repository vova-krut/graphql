import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
    })
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
