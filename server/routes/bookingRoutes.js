import express from 'express';
import { createBooking, getoccupiedSeats } from '../controllers/bookingController';

const bookingRouter = express.Router();

bookingRouter.post('/create', createBooking);
bookingRouter.get('/seats/:showId', getoccupiedSeats);

export default bookingRouter;