import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers } from "ethers";
import { Metadata } from "@polkadot/types";

export const getPangolinParachainAlphaFeeMarket = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * @param _lock_collateral: U128
         * @param _relay_fee: Enum<{0/None: , 1/Some: U128}>
	 */
        enrollAndLockCollateral: async (signer: ethers.Signer, _lock_collateral: unknown, _relay_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'enrollAndLockCollateral', false, _lock_collateral, _relay_fee);
        },

        enrollAndLockCollateralCall: (_lock_collateral: unknown, _relay_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'enrollAndLockCollateral', {
                lock_collateral: _lock_collateral,
                relay_fee: _relay_fee,
            });
        },

        /**
         * @param _new_collateral: U128
	 */
        updateLockedCollateral: async (signer: ethers.Signer, _new_collateral: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateLockedCollateral', false, _new_collateral);
        },

        updateLockedCollateralCall: (_new_collateral: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'updateLockedCollateral', {
                new_collateral: _new_collateral,
            });
        },

        /**
         * @param _new_fee: U128
	 */
        updateRelayFee: async (signer: ethers.Signer, _new_fee: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'updateRelayFee', false, _new_fee);
        },

        updateRelayFeeCall: (_new_fee: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'updateRelayFee', {
                new_fee: _new_fee,
            });
        },

        /**
	 */
        cancelEnrollment: async (signer: ethers.Signer): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'cancelEnrollment', false);
        },

        cancelEnrollmentCall: () => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'cancelEnrollment', {
            });
        },

        /**
         * @param _slash_protect: U128
	 */
        setSlashProtect: async (signer: ethers.Signer, _slash_protect: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setSlashProtect', false, _slash_protect);
        },

        setSlashProtectCall: (_slash_protect: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'setSlashProtect', {
                slash_protect: _slash_protect,
            });
        },

        /**
         * @param _number: U32
	 */
        setAssignedRelayersNumber: async (signer: ethers.Signer, _number: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'PangolinParachainAlphaFeeMarket', 'setAssignedRelayersNumber', false, _number);
        },

        setAssignedRelayersNumberCall: (_number: unknown) => {
            return buildRuntimeCall(metadata, 'PangolinParachainAlphaFeeMarket', 'setAssignedRelayersNumber', {
                number: _number,
            });
        },

    }
}
