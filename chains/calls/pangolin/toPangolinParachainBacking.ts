import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getToPangolinParachainBacking = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _spec_version: U32
         * @param _weight: U64
         * @param _value: Compact<U128>
         * @param _fee: Compact<U128>
         * @param _recipient: [U8; 32]
	 */
        lockAndRemoteIssue: async (signer: ethers.Signer, _spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', false, _spec_version, _weight, _value, _fee, _recipient);
        },

        lockAndRemoteIssueCall: (_spec_version: unknown, _weight: unknown, _value: unknown, _fee: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'lockAndRemoteIssue', {
                spec_version: _spec_version,
                weight: _weight,
                value: _value,
                fee: _fee,
                recipient: _recipient,
            });
        },

        /**
         * @param _amount: U128
         * @param _recipient: [U8; 32]
	 */
        unlockFromRemote: async (signer: ethers.Signer, _amount: unknown, _recipient: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'unlockFromRemote', false, _amount, _recipient);
        },

        unlockFromRemoteCall: (_amount: unknown, _recipient: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'unlockFromRemote', {
                amount: _amount,
                recipient: _recipient,
            });
        },

        /**
         * @param _period: U32
	 */
        setSecureLimitedPeriod: async (signer: ethers.Signer, _period: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', false, _period);
        },

        setSecureLimitedPeriodCall: (_period: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecureLimitedPeriod', {
                period: _period,
            });
        },

        /**
         * @param _limitation: U128
	 */
        setSecurityLimitationRingAmount: async (signer: ethers.Signer, _limitation: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', false, _limitation);
        },

        setSecurityLimitationRingAmountCall: (_limitation: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setSecurityLimitationRingAmount', {
                limitation: _limitation,
            });
        },

        /**
         * @param _account: [U8; 32]
	 */
        setRemoteMappingTokenFactoryAccount: async (signer: ethers.Signer, _account: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', false, _account);
        },

        setRemoteMappingTokenFactoryAccountCall: (_account: unknown) => {
            return buildRuntimeCall(metadata, 'ToPangolinParachainBacking', 'setRemoteMappingTokenFactoryAccount', {
                account: _account,
            });
        },

    }
}
