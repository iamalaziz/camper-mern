import Vehicle from '../models/vehicleModel.js'
import asyncHandler from 'express-async-handler'

// @desc    Fetch all vehicles
// @route   GET /api/vehicles
// @access  Public

const getVehicles = asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
        ? { name: { $regex: req.query.keyword, $options: 'i' } }
        : {}

    const vehicles = await Vehicle.find({ ...keyword })
    res.json(vehicles)
})

// @desc    Fetch single product
// @route   GET /api/vehicles/:id
// @access  Public

const getVehicleById = asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    if (vehicle) {
        res.json(vehicle)
    } else {
        res.status(404)
        throw new Error('Vehicle not found')
    }
})

// @desc    Delete a Vehicle
// @route   DELETE /api/vehicles/:id
// @access  Private/Admin

const deleteVehicle = asyncHandler(async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id)
    if (vehicle) {
        await vehicle.remove()
        res.json({ message: 'Vehicle removed!' })
    } else {
        res.status(404)
        throw new Error('Vehicle not found')
    }
})

export { getVehicles, getVehicleById, deleteVehicle }
