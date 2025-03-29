import { Model } from "mongoose";

export interface ITour {
    name: string;       
    duration: number;
    averageRating: number;          
    price: number;
    coverImage: string;
    image: string[];
    description: string;
    startDate: Date[]; 
    startLocation: string;
    locations: string[];
    slag: string;
    availableSeats : number;
}


export interface ITourMethods {
    getNextNearestStartDateAndEndDate() : {
        nearestStartDate: Date | null;
        estimatedEndDate: number | null;
    }
}

type TTourModel= Model<ITour, Record<string, unknown>, ITourMethods> 

export default TTourModel;