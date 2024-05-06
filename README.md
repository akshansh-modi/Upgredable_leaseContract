# Upgredable_leaseContract
Lease contract system on Ethereum using beacon proxy, OpenZeppelin, and Hardhat. Factory creates lease proxies, dynamically upgradeable.



To deploy implementation logic :
npx hardhat ignition deploy ./ignition/modules/deploy.js -- network sepolia --verify

To deploy leaseFactory
npx hardhat ignition deploy  ./ignition/modules/deployFactory.js -- network sepolia