import { Router } from 'express';
import bookingController from './booking.controller';

const bookingRouter= Router();


bookingRouter.post("/create_booking", bookingController.createBooking)
bookingRouter.patch("/update_booking/:id", bookingController.updateBooking)




export default bookingRouter
