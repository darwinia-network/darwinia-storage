import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";
import { HexString } from "@polkadot/util/types";

export const getSystem = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _ratio: U32
	 */
        fillBlock: async (signer: ethers.Signer, _ratio: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', false, _ratio);
        },

        fillBlockD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'fillBlock', true, data);
        },

        fillBlockCall: (_ratio: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'fillBlock', {
                ratio: _ratio,
            });
        },

        /**
         * @param _remark: Vec<U8>
	 */
        remark: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', false, _remark);
        },

        remarkD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remark', true, data);
        },

        remarkCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remark', {
                remark: _remark,
            });
        },

        /**
         * @param _pages: U64
	 */
        setHeapPages: async (signer: ethers.Signer, _pages: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', false, _pages);
        },

        setHeapPagesD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setHeapPages', true, data);
        },

        setHeapPagesCall: (_pages: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setHeapPages', {
                pages: _pages,
            });
        },

        /**
         * @param _code: Vec<U8>
	 */
        setCode: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', false, _code);
        },

        setCodeD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCode', true, data);
        },

        setCodeCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCode', {
                code: _code,
            });
        },

        /**
         * @param _code: Vec<U8>
	 */
        setCodeWithoutChecks: async (signer: ethers.Signer, _code: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', false, _code);
        },

        setCodeWithoutChecksD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setCodeWithoutChecks', true, data);
        },

        setCodeWithoutChecksCall: (_code: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setCodeWithoutChecks', {
                code: _code,
            });
        },

        /**
         * @param _items: Vec<(Vec<U8>, Vec<U8>)>
	 */
        setStorage: async (signer: ethers.Signer, _items: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', false, _items);
        },

        setStorageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'setStorage', true, data);
        },

        setStorageCall: (_items: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'setStorage', {
                items: _items,
            });
        },

        /**
         * @param _keys: Vec<Vec<U8>>
	 */
        killStorage: async (signer: ethers.Signer, _keys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', false, _keys);
        },

        killStorageD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killStorage', true, data);
        },

        killStorageCall: (_keys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killStorage', {
                keys: _keys,
            });
        },

        /**
         * @param _prefix: Vec<U8>
         * @param _subkeys: U32
	 */
        killPrefix: async (signer: ethers.Signer, _prefix: unknown, _subkeys: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', false, _prefix, _subkeys);
        },

        killPrefixD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'killPrefix', true, data);
        },

        killPrefixCall: (_prefix: unknown, _subkeys: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'killPrefix', {
                prefix: _prefix,
                subkeys: _subkeys,
            });
        },

        /**
         * @param _remark: Vec<U8>
	 */
        remarkWithEvent: async (signer: ethers.Signer, _remark: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', false, _remark);
        },

        remarkWithEventD: async (signer: ethers.Signer, data: HexString): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'System', 'remarkWithEvent', true, data);
        },

        remarkWithEventCall: (_remark: unknown) => {
            return buildRuntimeCall(metadata, 'System', 'remarkWithEvent', {
                remark: _remark,
            });
        },

    }
}
