import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getTechnicalMembership = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _who: [U8; 20]
	 */
        addMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', false, _who);
        },

        addMemberD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'addMember', true, data);
        },

        addMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'addMember', {
                who: _who,
            });
        },

        /**
         * @param _who: [U8; 20]
	 */
        removeMember: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', false, _who);
        },

        removeMemberD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'removeMember', true, data);
        },

        removeMemberCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'removeMember', {
                who: _who,
            });
        },

        /**
         * @param _remove: [U8; 20]
         * @param _add: [U8; 20]
	 */
        swapMember: async (signer: ethers.Signer, _remove: unknown, _add: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', false, _remove, _add);
        },

        swapMemberD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'swapMember', true, data);
        },

        swapMemberCall: (_remove: unknown, _add: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'swapMember', {
                remove: _remove,
                add: _add,
            });
        },

        /**
         * @param _members: Vec<[U8; 20]>
	 */
        resetMembers: async (signer: ethers.Signer, _members: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', false, _members);
        },

        resetMembersD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'resetMembers', true, data);
        },

        resetMembersCall: (_members: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'resetMembers', {
                members: _members,
            });
        },

        /**
         * @param _new: [U8; 20]
	 */
        changeKey: async (signer: ethers.Signer, _new: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', false, _new);
        },

        changeKeyD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'changeKey', true, data);
        },

        changeKeyCall: (_new: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'changeKey', {
                new: _new,
            });
        },

        /**
         * @param _who: [U8; 20]
	 */
        setPrime: async (signer: ethers.Signer, _who: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', false, _who);
        },

        setPrimeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'setPrime', true, data);
        },

        setPrimeCall: (_who: unknown) => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'setPrime', {
                who: _who,
            });
        },

        /**
	 */
        clearPrime: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', false);
        },

        clearPrimeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'TechnicalMembership', 'clearPrime', true, data);
        },

        clearPrimeCall: () => {
            return buildRuntimeCall(metadata, 'TechnicalMembership', 'clearPrime', {
            });
        },

    }
}
