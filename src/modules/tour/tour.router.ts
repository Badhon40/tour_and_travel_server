import { Router } from "express";
import tourController from "./tour.controller";

const tourRouter = Router()

tourRouter.get('/next_schedule/:id', tourController.getNextSchedule)
tourRouter.post('/create_tour', tourController.createNewTour)
tourRouter.get('/:id', tourController.getSingleTour)
tourRouter.patch('/:id', tourController.updateTour)
tourRouter.delete('/:id', tourController.deleteTour)
tourRouter.get('/', tourController.getAllTours) //to maintain the order of the routes, this should be at the end

export default tourRouter