import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getBridgeMoonbaseRelayParachains = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Submit proof of one or several parachain heads.
         * 
         * The proof is supposed to be proof of some `Heads` entries from the
         * `polkadot-runtime-parachains::paras` pallet instance, deployed at the bridged chain.
         * The proof is supposed to be crafted at the `relay_header_hash` that must already be
         * imported by corresponding GRANDPA pallet at this chain.
         *
         * @param _relay_block_hash: [U8; 32]
         * @param _parachains: Vec<U32>
         * @param _parachain_heads_proof: Vec<Vec<U8>>
         */
        submitParachainHeads: async (signer: ethers.Signer, _relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', false, _relay_block_hash, _parachains, _parachain_heads_proof);
        },

        submitParachainHeadsD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', true, data);
        },

        submitParachainHeadsCall: (_relay_block_hash: unknown, _parachains: unknown, _parachain_heads_proof: unknown) => {
            return buildRuntimeCall(metadata, 'BridgeMoonbaseRelayParachains', 'submitParachainHeads', {
                relay_block_hash: _relay_block_hash,
                parachains: _parachains,
                parachain_heads_proof: _parachain_heads_proof,
            });
        },

    }
}
