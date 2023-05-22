import {Request, Response} from "express";
import {Car, carModel} from "../models/Car";
import {service_error} from "../utils/service_error";

export const createCar = async (new_car: Partial<Car>) => {
    try {
        const car: Car = new carModel({
            brand: new_car.brand,
            model: new_car.model,
            year: new_car.year,
            isActive: new_car.isActive
        })
        await car.save()
    } catch (e) {
        service_error(e)
    }
}

export const getAllCars = async () => {
    try {
        const cars: Car[] = await carModel.find({isActive:true});
        return cars;
    } catch (e) {
        service_error(e);
    }
}

export const getCarById = async (id) => {
    try {
        const car = await carModel.findById(id);

        if (!car) {
            return service_error("Car not found");
        }
        return car;
    } catch (e) {
        service_error(e);
    }
}

export const updateCar = async (id: string, car: Car) => {

    try {
        const {brand, model, year, isActive} = car;
        const carToBeUpdate = await carModel.findByIdAndUpdate(id, {brand, model, year, isActive}, {new: true})

        if (!carToBeUpdate) {
            service_error("Car not found");
        }

    } catch (e) {
        service_error(e);
    }
}

export const deleteCar = async (id:string)=>{
    try{
        return await carModel.findByIdAndUpdate(id,{isActive:false},{new:true})
    }catch (e) {
        service_error(e)
    }
}