import mongoose from 'mongoose';
import {equipmentSchema} from './equipmentModel.js'

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);


const vehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    gearbox: {
      type: String,
      required: false,
    },
    fuelType: {
      type: String,
      required: false,
    },
    drivingLicence: {
      type: String,
      required: true,
    },
    winterAdapted: {
      type: Boolean,
      required: true,
    },
    petsAllowed: {
      type: Boolean,
      required: true,
    },
    isSmoking: {
      type: Boolean,
      required: true,
    },
    areChildrenAllowed: {
      type: Boolean,
      required: true,
    },
    insurance: {
      type: Boolean,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
      default: 1,
    },
    beds: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    minimumAge: {
      type: Number,
      required: true,
    },
    equipments: [equipmentSchema],
  },
  {
    timestamps: true,
  }
);

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
