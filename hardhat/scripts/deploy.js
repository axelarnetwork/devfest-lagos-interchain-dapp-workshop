// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const SendMessage = await hre.ethers.getContractFactory("SendMessage");
  const sendMessage = await SendMessage.deploy(
    "0x97837985Ec0494E7b9C71f5D3f9250188477ae14",
    "0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6"
  );

  await sendMessage.deployed();

  console.log(`SendMessage contract deployed to ${sendMessage.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
