import {GetStorage} from "../../storage";

export const getTreasury = (getStorage: GetStorage) => {
    return {

        /**
        * Number of proposals that have been made.

        * @return U32
        */
        proposalCount: async (): Promise<string | null> => {
            return await getStorage('Treasury', 'ProposalCount');
        },

        /**
        * Proposals that have been made.

        * @param param0: U32
        * @return Proposal: {proposer: [U8; 32], value: U128, beneficiary: [U8; 32], bond: U128}
        */
        proposals: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Treasury', 'Proposals', param0);
        },

        /**
        * Proposal indices that have been approved but not yet awarded.

        * @return BoundedVec: Vec&lt;U32&gt;
        */
        approvals: async (): Promise<string | null> => {
            return await getStorage('Treasury', 'Approvals');
        },
    };
};