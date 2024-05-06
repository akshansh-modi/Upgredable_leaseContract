const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LeaseContractModule", (m) => {
  const leaseContract = m.contract("LeaseContract");

  return { leaseContract };
});
