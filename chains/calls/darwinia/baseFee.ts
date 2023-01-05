import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getBaseFee = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _fee: [U64; 4]
	 */
        setBaseFeePerGas: async (signer: ethers.Signer, _fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', false, _fee);
        },

        setBaseFeePerGasD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setBaseFeePerGas', true, data);
        },

        setBaseFeePerGasCall: (_fee: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setBaseFeePerGas', {
                fee: _fee,
            });
        },

        /**
         * @param _is_active: Bool
	 */
        setIsActive: async (signer: ethers.Signer, _is_active: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', false, _is_active);
        },

        setIsActiveD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setIsActive', true, data);
        },

        setIsActiveCall: (_is_active: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setIsActive', {
                is_active: _is_active,
            });
        },

        /**
         * @param _elasticity: U32
	 */
        setElasticity: async (signer: ethers.Signer, _elasticity: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', false, _elasticity);
        },

        setElasticityD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BaseFee', 'setElasticity', true, data);
        },

        setElasticityCall: (_elasticity: unknown) => {
            return buildRuntimeCall(metadata, 'BaseFee', 'setElasticity', {
                elasticity: _elasticity,
            });
        },

    }
}
