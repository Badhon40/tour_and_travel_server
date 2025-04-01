import { Request, Response } from "express";
import tourService from "./tour.service";


const createNewTour = async (req : Request, res : Response) => {
    try {
        // const newTour = await tourService.createTour(req.body);
        const tour = req.body;

        const newTour = await tourService.createTour(tour);
        res.json({
            status: true,       
            message: "Tour created successfully",
            data: newTour,  
        });

    }
    catch (error) {
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }
}

const getAllTours = async (req : Request, res : Response) => {

    try {   
        const result = await tourService.getTours(req.query)
        // const tours = await tourService.getTours();
        res.json({
            status: true,
            message: "All Tours",
            data: result,
        });
    }
    catch (error) { 
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }
}   

const getSingleTour = async (req : Request, res : Response) => {
    try {   
        const id = req.params.id;
        const tour = await tourService.getSingleTour(id);
        res.json({
            status: true,
            message: "All Tours",
            data: tour,
        });
    }
    catch (error) { 
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }
}


const updateTour = async (req : Request, res : Response) => {
    try {   
        const id = req.params.id;
        const tour = req.body;
        const updatedTour = await tourService.updateTour(id, tour);
        res.json({
            status: true,
            message: "All Tours",
            data: updatedTour,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }
}

const deleteTour = async (req : Request, res : Response) => {
    try {   
        const id = req.params.id;
        const deletedTour = await tourService.deleteTour(id);   
        res.json({
            status: true,
            message: "All Tours",
            data: deletedTour,
        });

    }
    catch (error) { 
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }        
}

const getNextSchedule = async (req : Request, res : Response) => {
    try {    
        const id = req.params.id;
        const result = await tourService.getSingleTour(id); 
        const nextSchedule = result?.getNextNearestStartDateAndEndDate()
        res.json({
            status: true,
            message: "All Tours",
            data: nextSchedule,
        });
    }
    catch (error) {     
        res.json({
            status: false,
            message: "Internal server error",
            error: error,
        });
    }
}


const tourController ={
    createNewTour,
    getAllTours,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
}

export default tourController;