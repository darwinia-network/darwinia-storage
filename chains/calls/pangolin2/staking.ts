import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getStaking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
	 */
        stake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', false, _ring_amount, _kton_amount, _deposits);
        },

        stakeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'stake', true, data);
        },

        stakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'stake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
         * @param _ring_amount: U128
         * @param _kton_amount: U128
         * @param _deposits: Vec<U16>
	 */
        unstake: async (signer: ethers.Signer, _ring_amount: unknown, _kton_amount: unknown, _deposits: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', false, _ring_amount, _kton_amount, _deposits);
        },

        unstakeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'unstake', true, data);
        },

        unstakeCall: (_ring_amount: unknown, _kton_amount: unknown, _deposits: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'unstake', {
                ring_amount: _ring_amount,
                kton_amount: _kton_amount,
                deposits: _deposits,
            });
        },

        /**
	 */
        claim: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', false);
        },

        claimD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'claim', true, data);
        },

        claimCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'claim', {
            });
        },

        /**
         * @param _commission: U32
	 */
        collect: async (signer: ethers.Signer, _commission: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', false, _commission);
        },

        collectD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'collect', true, data);
        },

        collectCall: (_commission: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'collect', {
                commission: _commission,
            });
        },

        /**
         * @param _target: [U8; 20]
	 */
        nominate: async (signer: ethers.Signer, _target: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', false, _target);
        },

        nominateD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'nominate', true, data);
        },

        nominateCall: (_target: unknown) => {
            return buildRuntimeCall(metadata, 'Staking', 'nominate', {
                target: _target,
            });
        },

        /**
	 */
        chill: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', false);
        },

        chillD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Staking', 'chill', true, data);
        },

        chillCall: () => {
            return buildRuntimeCall(metadata, 'Staking', 'chill', {
            });
        },

    }
}
