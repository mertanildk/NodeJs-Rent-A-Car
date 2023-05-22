import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {carRoutes} from "./routes/car.routes";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.info('Connected to MongoDB');
})

app.use("/api/car",carRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});