import mongoose from "mongoose";
import Tour from "../tour/tour.model";
import { IBooking } from "./booking.interface"
import Booking from "./booking.model";


const createBooking = async (payload : IBooking): Promise<IBooking> => {
   
    const session = await mongoose.startSession();

    session.startTransaction();
    try {
        const {tourId, bookedSlots} = payload;

        const requiredTour = await Tour.findById(tourId)
    
        if (!requiredTour) {
            throw new Error("Tour not found")
        }
        const totalPrice = bookedSlots * requiredTour.price
    
         payload.totalPrice = totalPrice
         payload.bookingStatus= "pending"
            payload.paymentStatus= "unpaid"
    
        if(bookedSlots > requiredTour.availableSeats) {
            throw new Error("Not enough seats available")
        }
    
     const booking= await Booking.create([payload], { session });
       
    
     const updatedTour = await Tour.findByIdAndUpdate(booking[0].tourId, {
            $inc: { availableSeats: -bookedSlots },
        }, {
            new: true,  
            runValidators: true,
            session,
    
        })
        if(!updatedTour) {
            throw new Error("Tour not found")
        }

        await session.commitTransaction();

        await session.endSession();
    
        return booking[0];
    
        
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
        
    }
}

const updateBooking = async (id: string, payload: IBooking): Promise<IBooking> => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
       const booking = await Booking.findById(id).session(session);

       if(!booking){
        throw new Error("Booking not found")
       }
       
       await Tour.findByIdAndUpdate(booking.tourId, {
        $inc: { availableSeats: +booking.bookedSlots },  
         }, {   
            new: true,
            runValidators: true,
            session,
         });

        //  await Booking.findByIdAndDelete(id, { session });
         
         await session.commitTransaction();
            await session.endSession();

        
    }
    catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
    }

}

const bookingService = {
    createBooking,
    updateBooking
    
}
export default bookingService