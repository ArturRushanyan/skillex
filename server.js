const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./configs/config");

const startServer = async (app) => {
    try {
        app.use(cors());

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(bodyParser.text());

        app.listen(config.PORT, () => {
            console.log(`Server is up on port: ${config.PORT}`);
        });
    } catch (error) {
        console.log("Server is not running:", error);
    }
};

module.exports = startServer;