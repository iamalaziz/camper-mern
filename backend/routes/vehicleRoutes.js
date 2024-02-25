import express from 'express';
import { getVehicles, getVehicleById, deleteVehicle } from '../controllers/vehicleController.js';
import {protect, admin} from '../middleWare/authMiddleware.js';


const router = express.Router();

router.route('/').get(getVehicles)
router.route('/:id').get(getVehicleById).delete(protect, admin, deleteVehicle)

export default router;
