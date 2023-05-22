import {Response, Request} from "express";
import {createCar, deleteCar, getAllCars, getCarById, updateCar} from "../service/car.service";
import {Car} from "../models/Car";

export const createCarController = async (req: Request, res: Response) => {
    const{brand,model,year,isActive} = req.body;
    const car:Partial<Car>= {
        brand:brand,
        model:model,
        year:year,
        isActive:isActive
    }
    await createCar(car);
    return res.status(200).json({message:"Car created successfully"})
}

export const deleteCarController = async (req: Request, res: Response) => {
    const {id} = req.params;
    await deleteCar(id);
    return res.status(200).json({message: "Car deleted successfully"});
}

export const getAllCarsController = async (req: Request, res: Response) => {
    const data = await getAllCars();
    return res.status(200).json({message: "All Active Cars found", data});
}

export const getCarByIdController = async (req: Request, res: Response) => {
    const {id} = req.params;
    const data = await getCarById(id);
    return res.status(200).json({message: "Car found", data});
}
export const updateCarController = async (req: Request, res: Response) => {
    const {id} = req.params;
    const car: Car = req.body;
    const data = await updateCar(id, car);
    return res.status(200).json({message: "Car updated successfully", data});
}




