const bodyParser = require("body-parser");
const cors = require("cors");

const startServer = async (app) => {
    try {
        app.use(cors());

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(bodyParser.text());

        app.listen(3000, () => {
            console.log(`Server is up on port: ${3000}`);
        });
    } catch (error) {
        console.log("Server is not running:", error);
    }
};

module.exports = startServer;