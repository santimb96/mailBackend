import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import process from 'process';

import Mail from './routes/mail.js';


const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);


app.listen(process.env.PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});


app
  .use('/mail', Mail)


export {
  app
};