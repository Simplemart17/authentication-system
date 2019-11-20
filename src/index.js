import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/v1', (req, res) => { res.status(200).json({ message: 'Welcome to this page!' }); });

app.get('*', (req, res) => { res.status(404).json({ error: 'The page cannot be found!' }); });

app.listen(port, () => console.log(`Server is currently running on PORT ${port}`));

export default app;
