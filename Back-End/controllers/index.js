
const department = require("./department");
const user = require("./user");

module.exports = {
    ...department,
    ...user
}