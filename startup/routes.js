const express = require("express");
const { userRouter } = require("../routes/users");
const { carRouter } = require("../routes/cars");
const { bookingRouter } = require("../routes/bookings");
const { reviewRouter } = require("../routes/reviews");
const { userAuthRouter } = require("../routes/userAuth");
const cors = require("cors");
module.exports = function (app) {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      exposedHeaders: ["x-auth-token"],
    })
  );
  app.use("/api/users", userRouter);
  app.use("/api/cars", carRouter);
  app.use("/api/bookings", bookingRouter);
  app.use("/api/reviews", reviewRouter);
  app.use("/api/userAuth", userAuthRouter);
};
