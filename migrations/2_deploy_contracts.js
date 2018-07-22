// var Users = artifacts.require("./Users.sol");
var Connect = artifacts.require("./Connect.sol");

module.exports = function(deployer) {
  // deployer.deploy(Users);
  deployer.deploy(Connect);
};
