const generate = async (req, res, next) => {
    try {
        console.log("req.body ============", req.body);
        return res.status(200).send({ success: true });
    } catch(error) {
        next(error);
    }
};

module.exports = {
    generate,
};