const express = require("express");
const authRoute = require("./auth.routes");
const testRoute = require("./test.routes");
const serviceRoute = require('./service.routes');

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/test",
    route: testRoute,
  },
  {
    path: "/service",
    route: serviceRoute,
  }
];

defaultRoutes.forEach((route) => {
  // console.log(route);
  router.use(route.path, route.route);
});

module.exports = router;
