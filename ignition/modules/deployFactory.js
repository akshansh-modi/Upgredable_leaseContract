const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LeaseFactoryModule", (m) => {
  const leaseFactoryContract= m.contract("LeaseFactory",["0xA62e667fFac398E4b838a8B6D774e7773CCA75D0"] );// address of implementaiton logic 

  return { leaseFactoryContract };
});