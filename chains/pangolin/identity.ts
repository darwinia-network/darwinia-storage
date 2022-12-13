import {GetStorage} from "../../storage";

export const getIdentity = (getStorage: GetStorage) => {
    return {

        /**
        * Information that is pertinent to identify the entity behind an account.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.

        * @param param0: AccountId32: [U8; 32]
        * @return Registration: {judgements: Vec&lt;(U32, Enum&lt;{&#34;0/Unknown&#34;, &#34;1/FeePaid&#34;, &#34;2/Reasonable&#34;, &#34;3/KnownGood&#34;, &#34;4/OutOfDate&#34;, &#34;5/LowQuality&#34;, &#34;6/Erroneous&#34;}&gt;)&gt;, deposit: U128, info: {additional: Vec&lt;(Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;)&gt;, display: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, legal: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, web: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, riot: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, email: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, pgp_fingerprint: Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;, image: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;, twitter: Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;}}
        */
        identityOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'IdentityOf', param0);
        },

        /**
        * The super-identity of an alternative &#34;sub&#34; identity together with its name, within that
        * context. If the account is not some other account&#39;s sub-identity, then just `None`.

        * @param param0: AccountId32: [U8; 32]
        * @return ([U8; 32], Enum&lt;{&#34;0/None&#34;, &#34;1/Raw0&#34;, &#34;2/Raw1&#34;, &#34;3/Raw2&#34;, &#34;4/Raw3&#34;, &#34;5/Raw4&#34;, &#34;6/Raw5&#34;, &#34;7/Raw6&#34;, &#34;8/Raw7&#34;, &#34;9/Raw8&#34;, &#34;10/Raw9&#34;, &#34;11/Raw10&#34;, &#34;12/Raw11&#34;, &#34;13/Raw12&#34;, &#34;14/Raw13&#34;, &#34;15/Raw14&#34;, &#34;16/Raw15&#34;, &#34;17/Raw16&#34;, &#34;18/Raw17&#34;, &#34;19/Raw18&#34;, &#34;20/Raw19&#34;, &#34;21/Raw20&#34;, &#34;22/Raw21&#34;, &#34;23/Raw22&#34;, &#34;24/Raw23&#34;, &#34;25/Raw24&#34;, &#34;26/Raw25&#34;, &#34;27/Raw26&#34;, &#34;28/Raw27&#34;, &#34;29/Raw28&#34;, &#34;30/Raw29&#34;, &#34;31/Raw30&#34;, &#34;32/Raw31&#34;, &#34;33/Raw32&#34;, &#34;34/BlakeTwo256&#34;, &#34;35/Sha256&#34;, &#34;36/Keccak256&#34;, &#34;37/ShaThree256&#34;}&gt;)
        */
        superOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'SuperOf', param0);
        },

        /**
        * Alternative &#34;sub&#34; identities of this account.
        *
        * The first item is the deposit, the second is a vector of the accounts.
        *
        * TWOX-NOTE: OK ― `AccountId` is a secure hash.

        * @param param0: AccountId32: [U8; 32]
        * @return (U128, Vec&lt;[U8; 32]&gt;)
        */
        subsOf: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Identity', 'SubsOf', param0);
        },

        /**
        * The set of registrars. Not expected to get very big as can only be added through a
        * special origin (likely a council motion).
        *
        * The index into this can be cast to `RegistrarIndex` to get a valid value.

        * @return BoundedVec: Vec&lt;Enum&lt;{&#34;0/None&#34;, &#34;1/Some&#34;}&gt;&gt;
        */
        registrars: async (): Promise<string | null> => {
            return await getStorage('Identity', 'Registrars');
        },
    };
};