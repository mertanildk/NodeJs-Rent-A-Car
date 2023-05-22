import {Response} from "express";

export const service_error = (e: any) => {
    //Response.status(500).json({message: "Something went wrong", e});
    throw new Error(e);
};