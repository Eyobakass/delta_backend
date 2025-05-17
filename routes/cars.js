const express = require("express");
const router = express.Router();
const Car = require("../models/car");
const Booking = require("../models/booking");
const Review = require("../models/review");
const User = require("../models/user");

router.get("/", async (req, res) => {
  const cars = await Car.find();
    if (!cars) return res.status(404).send("no cars found");
  res.send(cars);
});

router.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).send("Car not found");
  res.send(car);
});
module.exports.carRouter = router;