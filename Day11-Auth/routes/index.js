var express = require("express");
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerChecks'
)
var register  = require('../controllers/register')

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * @requires {email ,firstName , lastName , password , confirmPassword} - req.body
 * @description
 * Security , performance ans edge cases
 * email validate  string
 *  password validate 
 * level -2 
 * JS/SQL injection
 * level -3 
 * Check if email already exists
 * password hash
 * email lowercase 
 * save
 */

router.post("/register", registerInitialChecks, register);

module.exports = router;
