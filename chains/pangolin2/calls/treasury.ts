import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getTreasury = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Put forward a suggestion for spending. A deposit proportional to the value
         * is reserved and slashed if the proposal is rejected. It is returned once the
         * proposal is awarded.
         * 
         * # <weight>
         * - Complexity: O(1)
         * - DbReads: `ProposalCount`, `origin account`
         * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
         * # </weight>
         *
         * @param _value: Compact<U128>
         * @param _beneficiary: [U8; 20]
         */
        proposeSpend: async (signer: ethers.Signer, _value: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', false, _value, _beneficiary);
        },

        proposeSpendD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'proposeSpend', true, data);
        },

        proposeSpendCall: (_value: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'proposeSpend', {
                value: _value,
                beneficiary: _beneficiary,
            });
        },

        /**
         * Reject a proposed spend. The original deposit will be slashed.
         * 
         * May only be called from `T::RejectOrigin`.
         * 
         * # <weight>
         * - Complexity: O(1)
         * - DbReads: `Proposals`, `rejected proposer account`
         * - DbWrites: `Proposals`, `rejected proposer account`
         * # </weight>
         *
         * @param _proposal_id: Compact<U32>
         */
        rejectProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', false, _proposal_id);
        },

        rejectProposalD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'rejectProposal', true, data);
        },

        rejectProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'rejectProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
         * and the original deposit will be returned.
         * 
         * May only be called from `T::ApproveOrigin`.
         * 
         * # <weight>
         * - Complexity: O(1).
         * - DbReads: `Proposals`, `Approvals`
         * - DbWrite: `Approvals`
         * # </weight>
         *
         * @param _proposal_id: Compact<U32>
         */
        approveProposal: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', false, _proposal_id);
        },

        approveProposalD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'approveProposal', true, data);
        },

        approveProposalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'approveProposal', {
                proposal_id: _proposal_id,
            });
        },

        /**
         * Propose and approve a spend of treasury funds.
         * 
         * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
         * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         * - `beneficiary`: The destination account for the transfer.
         * 
         * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
         * beneficiary.
         *
         * @param _amount: Compact<U128>
         * @param _beneficiary: [U8; 20]
         */
        spend: async (signer: ethers.Signer, _amount: unknown, _beneficiary: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', false, _amount, _beneficiary);
        },

        spendD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'spend', true, data);
        },

        spendCall: (_amount: unknown, _beneficiary: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'spend', {
                amount: _amount,
                beneficiary: _beneficiary,
            });
        },

        /**
         * Force a previously approved proposal to be removed from the approval queue.
         * The original deposit will no longer be returned.
         * 
         * May only be called from `T::RejectOrigin`.
         * - `proposal_id`: The index of a proposal
         * 
         * # <weight>
         * - Complexity: O(A) where `A` is the number of approvals
         * - Db reads and writes: `Approvals`
         * # </weight>
         * 
         * Errors:
         * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
         * i.e., the proposal has not been approved. This could also mean the proposal does not
         * exist altogether, thus there is no way it would have been approved in the first place.
         *
         * @param _proposal_id: Compact<U32>
         */
        removeApproval: async (signer: ethers.Signer, _proposal_id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', false, _proposal_id);
        },

        removeApprovalD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Treasury', 'removeApproval', true, data);
        },

        removeApprovalCall: (_proposal_id: unknown) => {
            return buildRuntimeCall(metadata, 'Treasury', 'removeApproval', {
                proposal_id: _proposal_id,
            });
        },

    }
}
