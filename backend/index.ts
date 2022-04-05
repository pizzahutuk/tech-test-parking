// EXAMPLE ONLY. REMOVE OR EDIT AS NEEDED.

import * as express from 'express';
import routes from './routes';
import * as cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
