import { model, Schema } from "mongoose";
import TTourModel, { ITour, ITourMethods } from "./tour.interface";


const tourSchema = new Schema<ITour, TTourModel,ITourMethods>({
    name: {
        type: String,   
        required: true,
    },

    duration: {
        type: Number, 
        required: true,
    },
    
    averageRating :{
        type : Number,
        default : 5,
    },
     price :{
        type : Number,
        required : true,
    },
     coverImage :{
        type : String,  
        required : true,
    },
    image: [String],
    description :{
        type : String,
        required : true,
    }, 
    availableSeats :{
        type : Number,
        required : true,
    }, 
    startDate :[Date],
    startLocation :{
        type : String,  
        required : true,
    },
    locations :{ 
        type : [String],
        required : true,
    },  
    
    slag: String


})

tourSchema.methods.nextNearestStartDateAndEndDate = function () {
    const today = new Date();

    const futureDatesv= this.startDate.filter((startDate : Date) =>{
        return startDate > today;
    });

    futureDatesv.sort((a: Date, b: Date) => {
        return a.getTime() - b.getTime();
    });

    const nearestStartDate  = futureDatesv[0];

    const estimatedEndDate = new Date(nearestStartDate.getTime() + this.duration * 24 * 60 * 60 * 1000);

    return {
        nearestStartDate,
        estimatedEndDate,
    }
}

const Tour= model<ITour,TTourModel>("Tour", tourSchema);
export default Tour;