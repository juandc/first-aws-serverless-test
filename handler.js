import serverless from 'serverless-http';
import express from 'express';

const app = express()

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

export const hello = serverless(app);
