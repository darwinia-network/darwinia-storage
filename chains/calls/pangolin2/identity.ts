import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getIdentity = (dispatch: Dispatch) => {
    return {
        /**
         * @param param0: [U8; 20]
	 */
        addRegistrar: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addRegistrar', false, param0);
        },

        /**
         * @param param0: {additional: Vec<(Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>, display: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, legal: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, web: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, riot: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, email: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, pgp_fingerprint: Enum<{"0/None", "1/Some"}>, image: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>, twitter: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>}
	 */
        setIdentity: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setIdentity', false, param0);
        },

        /**
         * @param param0: Vec<([U8; 20], Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>)>
	 */
        setSubs: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setSubs', false, param0);
        },

        /**
	 */
        clearIdentity: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'clearIdentity', false);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Compact<U128>
	 */
        requestJudgement: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'requestJudgement', false, param0, param1);
        },

        /**
         * @param param0: U32
	 */
        cancelRequest: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'cancelRequest', false, param0);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: Compact<U128>
	 */
        setFee: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFee', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: [U8; 20]
	 */
        setAccountId: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setAccountId', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: U64
	 */
        setFields: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'setFields', false, param0, param1);
        },

        /**
         * @param param0: Compact<U32>
         * @param param1: [U8; 20]
         * @param param2: Enum<{"0/Unknown", "1/FeePaid", "2/Reasonable", "3/KnownGood", "4/OutOfDate", "5/LowQuality", "6/Erroneous"}>
         * @param param3: [U8; 32]
	 */
        provideJudgement: async (signer: ethers.Signer, param0: unknown, param1: unknown, param2: unknown, param3: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'provideJudgement', false, param0, param1, param2, param3);
        },

        /**
         * @param param0: [U8; 20]
	 */
        killIdentity: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'killIdentity', false, param0);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>
	 */
        addSub: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'addSub', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
         * @param param1: Enum<{"0/None", "1/Raw0", "2/Raw1", "3/Raw2", "4/Raw3", "5/Raw4", "6/Raw5", "7/Raw6", "8/Raw7", "9/Raw8", "10/Raw9", "11/Raw10", "12/Raw11", "13/Raw12", "14/Raw13", "15/Raw14", "16/Raw15", "17/Raw16", "18/Raw17", "19/Raw18", "20/Raw19", "21/Raw20", "22/Raw21", "23/Raw22", "24/Raw23", "25/Raw24", "26/Raw25", "27/Raw26", "28/Raw27", "29/Raw28", "30/Raw29", "31/Raw30", "32/Raw31", "33/Raw32", "34/BlakeTwo256", "35/Sha256", "36/Keccak256", "37/ShaThree256"}>
	 */
        renameSub: async (signer: ethers.Signer, param0: unknown, param1: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'renameSub', false, param0, param1);
        },

        /**
         * @param param0: [U8; 20]
	 */
        removeSub: async (signer: ethers.Signer, param0: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'removeSub', false, param0);
        },

        /**
	 */
        quitSub: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Identity', 'quitSub', false);
        },


    }
}
