import express, { Request, Response} from 'express'
import {Router} from './routes/suburbRoutes'

const app = express();

const port = 5000;
app.use("/suburb", Router)
app.listen(port, () => {
    console.log('Listening on port 5000');

})