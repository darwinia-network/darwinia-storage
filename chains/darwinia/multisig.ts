import {GetStorage} from "../../storage";

export const getMultisig = (getStorage: GetStorage) => {
    return {

        /**
        * The set of open multisig operations.

        * @param param0: AccountId32: [U8; 32]
        * @param param1: [U8; 32]
        * @return Multisig: {when: {height: U32, index: U32}, deposit: U128, depositor: [U8; 32], approvals: Vec&lt;[U8; 32]&gt;}
        */
        multisigs: async (param0: unknown, param1: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Multisigs', param0, param1);
        },

        /**

        * @param param0: [U8; 32]
        * @return ((Compact&lt;U32&gt;, Enum&lt;{&#34;0/System&#34;, &#34;2/Babe&#34;, &#34;3/Timestamp&#34;, &#34;4/Balances&#34;, &#34;5/Kton&#34;, &#34;7/Authorship&#34;, &#34;38/ElectionProviderMultiPhase&#34;, &#34;8/Staking&#34;, &#34;11/Session&#34;, &#34;13/Grandpa&#34;, &#34;14/ImOnline&#34;, &#34;50/MessageGadget&#34;, &#34;51/EcdsaAuthority&#34;, &#34;37/Democracy&#34;, &#34;16/Council&#34;, &#34;17/TechnicalCommittee&#34;, &#34;18/PhragmenElection&#34;, &#34;19/TechnicalMembership&#34;, &#34;20/Treasury&#34;, &#34;40/Tips&#34;, &#34;41/Bounties&#34;, &#34;27/Sudo&#34;, &#34;21/Vesting&#34;, &#34;22/Utility&#34;, &#34;23/Identity&#34;, &#34;24/Society&#34;, &#34;25/Recovery&#34;, &#34;26/Scheduler&#34;, &#34;52/Preimage&#34;, &#34;28/Proxy&#34;, &#34;29/Multisig&#34;, &#34;47/EVM&#34;, &#34;48/Ethereum&#34;, &#34;49/BaseFee&#34;, &#34;43/BridgeCrabGrandpa&#34;, &#34;44/BridgeCrabMessages&#34;, &#34;53/BridgePolkadotGrandpa&#34;, &#34;54/BridgePolkadotParachain&#34;, &#34;56/BridgeDarwiniaParachainMessages&#34;, &#34;45/FeeMarket&#34;, &#34;57/DarwiniaParachainFeeMarket&#34;}&gt;), [U8; 32], U128)
        */
        calls: async (param0: unknown): Promise<string | null> => {
            return await getStorage('Multisig', 'Calls', param0);
        },
    };
};