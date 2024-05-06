# Upgradable_leaseContract

This repository contains a lease contract system built on Ethereum utilizing the beacon proxy pattern, OpenZeppelin, and Hardhat. The factory contract generates lease proxies, ensuring dynamic upgradability.

## Deployment Instructions

To deploy the implementation logic:
```
npx hardhat ignition deploy ./ignition/modules/deploy.js --network sepolia --verify
```

To deploy the leaseFactory:
```
npx hardhat ignition deploy ./ignition/modules/deployFactory.js --network sepolia
```
