import express, { Request, Response} from 'express'
import {Router} from './routes/suburbRoutes'

const app = express();

const port = 3000;
app.use("/user", Router)
app.listen(port, () => {
    console.log('Listening on port 3000');

})