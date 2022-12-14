import {GetStorage} from "../../../storage";

export const getAuraExt = (getStorage: GetStorage) => {
    return {

        /**
         * Serves as cache for the authorities.
         *
         * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
         * but we require the old authorities to verify the seal when validating a PoV. This will always
         * be updated to the latest AuRa authorities in `on_finalize`.
         *
         * @return BoundedVec: Vec<[U8; 32]>
         */
        authorities: async (): Promise<string | null> => {
            return await getStorage('AuraExt', 'Authorities');
        },
    };
};
