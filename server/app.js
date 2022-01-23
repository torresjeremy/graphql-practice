import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const app = express();

const PORT = 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Now listening for requests on port: ${PORT}`);
});