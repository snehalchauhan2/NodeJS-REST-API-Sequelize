const users_ctrl = require("../controllers/users_controller");
module.exports = function(express) {
 const route = express.Router();

 route.get("/users/:userid/:phoneNumber",users_ctrl.get);
 route.post("/users",users_ctrl.save);
 route.patch("/users/:userid/:phoneNumber",users_ctrl.update);
 route.delete("/users/:userid/:phoneNumber",users_ctrl.delete);
 return route;
};