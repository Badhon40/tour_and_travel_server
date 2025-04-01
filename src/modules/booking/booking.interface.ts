import mongoose from "mongoose";

export interface IBooking{
    tourId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    bookedSlots: number;
    bookingStatus: "pending" | "confirmed" | "cancelled";
    totalPrice: number;
    paymentStatus: "paid" | "unpaid";

}
