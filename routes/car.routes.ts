import express from 'express';
import {
    createCarController, deleteCarController,
    getAllCarsController,
    getCarByIdController,
    updateCarController
} from "../controllers/car.controller";


export const carRoutes = express.Router();

carRoutes.get("/get-all-cars",getAllCarsController)
carRoutes.get("/get-car-by-id/:id",getCarByIdController)
carRoutes.post("/create-car",createCarController)
carRoutes.put("/update-car/:id",updateCarController)
carRoutes.put("/delete-car/:id",deleteCarController)