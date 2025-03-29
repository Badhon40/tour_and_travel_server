import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import bookingService from "./booking.service";

const createBooking= catchAsync(async (req, res) => {
    const payLoad= req.body;
    const result = await bookingService.createBooking(payLoad)
    sendResponse(
        res,
        {
            status: true,
            statusCode: 200,
            message: "Booking created successfully",
            data: result,
        }
    )

}
)

const updateBooking= catchAsync(async (req, res) => {
    const id = req.params.id;
    const payLoad= req.body;
    const result = await bookingService.updateBooking(id, payLoad)
    sendResponse(
        res,
        {
            status: true,
            statusCode: 200,
            message: "Booking updated successfully",
            data: result,
        }
    )

}
)





const bookingController = {
    createBooking,
    updateBooking
    
}
export default bookingController