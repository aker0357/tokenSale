var Migrations = artifacts.require("./Migrations.sol");
var Crowd = artifacts.require("./tokenSale.sol")
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Crowd,1532279670,1532280670).then(()=> { return Crowd.deployed})
};
