import { model, Schema } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>(
    {
        tourId: {
            type: Schema.Types.ObjectId,
            ref: "Tour",
            required: true,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        bookedSlots: {
            type: Number,
            required: true,
        },
        bookingStatus: {
            type: String,
            enum: ["pending", "confirmed", "cancelled"],
            default: "pending",
        },

        totalPrice: {
            type: Number,
        },
        paymentStatus: {
            type: String,
            enum: ["paid", "unpaid"],
            default: "unpaid",
        },
    },
    {
        timestamps: true,
    }
    
)

const Booking= model<IBooking>("Booking", bookingSchema)
export default Booking;