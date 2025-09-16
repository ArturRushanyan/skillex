const Combinations = require("./combinations/index");

const indexRoutes = (app) => {
    app.use("/api/v1/combinations", Combinations);
};

module.exports = indexRoutes;