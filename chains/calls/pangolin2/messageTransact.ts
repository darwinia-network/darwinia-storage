import { Dispatch } from "../../../call";
import { ethers } from "ethers";

export const getMessageTransact = (dispatch: Dispatch) => {
    return {
        /**
         * @param _transaction: Enum<{"0/Legacy", "1/EIP2930", "2/EIP1559"}>
	 */
        messageTransact: async (signer: ethers.Signer, _transaction: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'MessageTransact', 'messageTransact', false, _transaction);
        },


    }
}
