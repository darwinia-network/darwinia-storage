import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMultisig = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: Vec<[U8; 32]>
         * @param param1: Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>
	 */
        asMultiThreshold_1: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMultiThreshold_1', false, param0, param1);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: (Compact<U32>, Enum<{"0/System", "2/Babe", "3/Timestamp", "4/Indices", "23/Balances", "24/Kton", "6/Authorship", "38/ElectionProviderMultiPhase", "25/Staking", "9/Session", "11/Grandpa", "12/ImOnline", "36/Democracy", "14/Council", "15/TechnicalCommittee", "26/PhragmenElection", "16/TechnicalMembership", "32/Treasury", "44/Tips", "45/Bounties", "17/Utility", "18/Identity", "19/Society", "20/Recovery", "21/Scheduler", "58/Preimage", "41/Vesting", "33/Proxy", "34/Multisig", "39/EVM", "40/Ethereum", "51/BaseFee", "48/BridgeDarwiniaMessages", "47/BridgeDarwiniaGrandpa", "52/BridgeKusamaGrandpa", "53/BridgeKusamaParachain", "56/BridgeCrabParachainMessages", "49/DarwiniaFeeMarket", "55/CrabParachainFeeMarket"}>)
         * @param param4: Bool
         * @param param5: U64
	 */
        asMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'asMulti', false, param0, param1, param2, param3, param4, param5);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: Enum<{"0/None", "1/Some"}>
         * @param param3: [U8; 32]
         * @param param4: U64
	 */
        approveAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown, param4: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'approveAsMulti', false, param0, param1, param2, param3, param4);
        },

        /**
         * @param param0: U16
         * @param param1: Vec<[U8; 32]>
         * @param param2: {height: U32, index: U32}
         * @param param3: [U8; 32]
	 */
        cancelAsMulti: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Multisig', 'cancelAsMulti', false, param0, param1, param2, param3);
        },


    }
}
