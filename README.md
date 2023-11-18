# **Fullstack Interchain dApp**

This project is a full-stack decentralized application (dApp) built with React/Nextjs, Solidity, and Axelar General Message Passing. It enables users to send messages between two blockchain chains.

## **Table of Contents**

- [**Features**](https://github.com/Olanetsoft/fullstack-interchain-dapp#features)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Technologies Used**](#technologies-used)
- [**Contributing**](#contributing)
- [**License**](#license)

## **Features**

- Send messages between two blockchain chains
- User-friendly interface with dark mode support
- Integration with Axelar General Message Passing
- Real-time response and message status updates

## **Installation**

To install and run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Olanetsoft/devfest-lagos-interchain-dapp-workshop.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fullstack-interchain-dapp
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Navigate to the hardhat directory:

   ```bash
   cd hardhat
   ```

5. Set up the environment variables to deploy the smart contracts:

   - Create a `.env` file in the hardhat directory.
   - Define the following variables in the `.env` file:
     ```apache
      PRIVATE_KEY=<Your Wallet Private Key>
     ```
     Replace `<Your Wallet Private Key>` with your wallet private key.
   - Run the following command to install the hardhat dependencies:
     ```bash
     npm install
     ```

6. Compile and Deploy the smart contracts:

   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

   Replace `<network>` with the desired network (e.g. `fantom` and `avalanche` in this case). Copy the contract address once the deployment is complete.

   > Ensure you update the Axelar gateway and gas service address for Fantom and Avalanche respectively in `deploy.js` file under the `scripts` directory and deploy them seperately. You can find the gateway and gas service address [here](https://docs.axelar.dev/resources/testnet).

7. Set up the environment variables:

   - Create a `.env.local` file in the root directory.
   - Define the following variables in the `.env.local` file:
     ```apache
     NEXT_PUBLIC_FANTOM_CONTRACT_ADDRESS=<Fantom contract address>
     NEXT_PUBLIC_AVALANCHE_CONTRACT_ADDRESS=<Avalanche contract address>
     NEXT_PUBLIC_AVALANCHE_RPC_URL=https://avalanche-fuji-c-chain.publicnode.com
     ```
     Replace `<Fantom contract address>` and `<Avalanche contract address>`, with the respective values.

8. Start the development server:

```bash
cd ..
npm run dev
```

9.  Access the application in your browser:

Open your web browser and visit [`http://localhost:3000`](http://localhost:3000) to see the application running.

## **Usage**

1. Connect your wallet:

   - Click on the "Connect" button to connect your wallet.
   - Follow the prompts to connect to the desired blockchain network.

2. Sending a message:

   - Enter your message content in the "Send Message" section.
   - Click the "Send" button to send the message.
   - A toast notification will appear, indicating that the message is being sent.

3. Response:

   - The "Response" section will display the received message once it is successfully delivered.
   - A "waiting for response..." message will be displayed if the message has not yet been received.

## **Technologies Used**

The following technologies and frameworks were used in this project:

- React
- Solidity
- Axelar General Message Passing
- @rainbow-me/rainbowkit
- wagmi
- ethers.js
- Next.js
- Toastify
- CSS (Tailwind CSS)

## **Contributing**

Contributions are welcome! If you find any issues or want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request detailing your changes.

## **License**

This project is licensed under the [**MIT License**](https://chat.openai.com/LICENSE).
