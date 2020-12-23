const express = require("express");
const router = express.Router();

const handler = require("../handler/index");

// makes new group
router.post("/newGroup", (req, res) => {

    // creates a new doc
    handler.postNewGroup(req, res)
}
)

module.exports = router;
