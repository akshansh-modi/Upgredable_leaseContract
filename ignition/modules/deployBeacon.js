const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LeaseBeaconModule", (m) => {
  const LeaseBeaconContract = m.contract("LeaseBeacon",[0xCe3DEf9CA63AE00eaF76B2C95e4aFf2B4815cab2]);
  return { LeaseBeaconContract };
});
