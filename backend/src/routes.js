const { Router } = require("express");

const routers = Router();


routers.post('/devs', (req, res) => {
    const { github_username } = req.body;
    return res.json({ message: "Suceso" });
});

module.exports = routers;