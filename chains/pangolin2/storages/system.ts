import {GetStorage} from "../../../storage";

export const getSystem = (getStorage: GetStorage) => {
    return {

        /**
         * The full account information for a particular account ID.
         *
         * @param param0: AccountId20: [U8; 20]
         * @return AccountInfo: {nonce: U32, consumers: U32, providers: U32, sufficients: U32, data: {free: U128, reserved: U128, misc_frozen: U128, fee_frozen: U128}}
         */
        account: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'Account', param0);
        },

        /**
         * Total extrinsics count for the current block.
         *
         * @return U32
         */
        extrinsicCount: async (): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicCount');
        },

        /**
         * The current weight for the block.
         *
         * @return PerDispatchClass: {normal: {ref_time: U64}, operational: {ref_time: U64}, mandatory: {ref_time: U64}}
         */
        blockWeight: async (): Promise<string | null> => {
            return await getStorage('System', 'BlockWeight');
        },

        /**
         * Total length (in bytes) for all extrinsics put together, for the current block.
         *
         * @return U32
         */
        allExtrinsicsLen: async (): Promise<string | null> => {
            return await getStorage('System', 'AllExtrinsicsLen');
        },

        /**
         * Map of block numbers to block hashes.
         *
         * @param param0: U32
         * @return H256: [U8; 32]
         */
        blockHash: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'BlockHash', param0);
        },

        /**
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
         *
         * @param param0: U32
         * @return Vec<U8>
         */
        extrinsicData: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'ExtrinsicData', param0);
        },

        /**
         * The current block number being processed. Set by `execute_block`.
         *
         * @return U32
         */
        number: async (): Promise<string | null> => {
            return await getStorage('System', 'Number');
        },

        /**
         * Hash of the previous block.
         *
         * @return H256: [U8; 32]
         */
        parentHash: async (): Promise<string | null> => {
            return await getStorage('System', 'ParentHash');
        },

        /**
         * Digest of the current block, also part of the block header.
         *
         * @return Digest: {logs: Vec<Enum<{6/PreRuntime: ([U8; 4], Vec<U8>), 4/Consensus: ([U8; 4], Vec<U8>), 5/Seal: ([U8; 4], Vec<U8>), 0/Other: Vec<U8>, 8/RuntimeEnvironmentUpdated: }>>}
         */
        digest: async (): Promise<string | null> => {
            return await getStorage('System', 'Digest');
        },

        /**
         * Events deposited for the current block.
         *
         * NOTE: The item is unbound and should therefore never be read on chain.
         * It could otherwise inflate the PoV size of a block.
         *
         * Events have a large in-memory size. Box the events to not go out-of-memory
         * just in case someone still reads them from within the runtime.
         *
         * @return Vec<{phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>, event: Enum<{0/System: Enum<{0/ExtrinsicSuccess: {dispatch_info: {weight: {ref_time: U64}, class: Enum<{"0/Normal", "1/Operational", "2/Mandatory"}>, pays_fee: Enum<{"0/Yes", "1/No"}>}}, 1/ExtrinsicFailed: {dispatch_error: Enum<{"0/Other", "1/CannotLookup", "2/BadOrigin", "3/Module", "4/ConsumerRemaining", "5/NoProviders", "6/TooManyConsumers", "7/Token", "8/Arithmetic", "9/Transactional"}>, dispatch_info: {weight: {ref_time: U64}, class: Enum<{"0/Normal", "1/Operational", "2/Mandatory"}>, pays_fee: Enum<{"0/Yes", "1/No"}>}}, 2/CodeUpdated: , 3/NewAccount: {account: [U8; 20]}, 4/KilledAccount: {account: [U8; 20]}, 5/Remarked: {sender: [U8; 20], hash: [U8; 32]}}>, 1/ParachainSystem: Enum<{0/ValidationFunctionStored: , 1/ValidationFunctionApplied: {relay_chain_block_num: U32}, 2/ValidationFunctionDiscarded: , 3/UpgradeAuthorized: {code_hash: [U8; 32]}, 4/DownwardMessagesReceived: {count: U32}, 5/DownwardMessagesProcessed: {weight_used: {ref_time: U64}, dmq_head: [U8; 32]}}>, 5/Balances: Enum<{0/Endowed: {account: [U8; 20], free_balance: U128}, 1/DustLost: {account: [U8; 20], amount: U128}, 2/Transfer: {from: [U8; 20], to: [U8; 20], amount: U128}, 3/BalanceSet: {who: [U8; 20], free: U128, reserved: U128}, 4/Reserved: {who: [U8; 20], amount: U128}, 5/Unreserved: {who: [U8; 20], amount: U128}, 6/ReserveRepatriated: {from: [U8; 20], to: [U8; 20], amount: U128, destination_status: Enum<{"0/Free", "1/Reserved"}>}, 7/Deposit: {who: [U8; 20], amount: U128}, 8/Withdraw: {who: [U8; 20], amount: U128}, 9/Slashed: {who: [U8; 20], amount: U128}}>, 6/TransactionPayment: Enum<{0/TransactionFeePaid: {who: [U8; 20], actual_fee: U128, tip: U128}}>, 34/Assets: Enum<{0/Created: {asset_id: U64, creator: [U8; 20], owner: [U8; 20]}, 1/Issued: {asset_id: U64, owner: [U8; 20], total_supply: U128}, 2/Transferred: {asset_id: U64, from: [U8; 20], to: [U8; 20], amount: U128}, 3/Burned: {asset_id: U64, owner: [U8; 20], balance: U128}, 4/TeamChanged: {asset_id: U64, issuer: [U8; 20], admin: [U8; 20], freezer: [U8; 20]}, 5/OwnerChanged: {asset_id: U64, owner: [U8; 20]}, 6/Frozen: {asset_id: U64, who: [U8; 20]}, 7/Thawed: {asset_id: U64, who: [U8; 20]}, 8/AssetFrozen: {asset_id: U64}, 9/AssetThawed: {asset_id: U64}, 10/Destroyed: {asset_id: U64}, 11/ForceCreated: {asset_id: U64, owner: [U8; 20]}, 12/MetadataSet: {asset_id: U64, name: Vec<U8>, symbol: Vec<U8>, decimals: U8, is_frozen: Bool}, 13/MetadataCleared: {asset_id: U64}, 14/ApprovedTransfer: {asset_id: U64, source: [U8; 20], delegate: [U8; 20], amount: U128}, 15/ApprovalCancelled: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20]}, 16/TransferredApproved: {asset_id: U64, owner: [U8; 20], delegate: [U8; 20], destination: [U8; 20], amount: U128}, 17/AssetStatusChanged: {asset_id: U64}}>, 40/Deposit: Enum<{0/DepositCreated: {owner: [U8; 20], deposit_id: U16, value: U128, start_time: U128, expired_time: U128, kton_reward: U128}, 1/DepositClaimed: {owner: [U8; 20], deposit_id: U16}, 2/DepositClaimedWithPenalty: {owner: [U8; 20], deposit_id: U16, kton_penalty: U128}}>, 41/AccountMigration: Enum<{0/Migrated: {from: [U8; 32], to: [U8; 20]}}>, 8/Staking: Enum<{0/Staked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 1/Unstaked: {staker: [U8; 20], ring_amount: U128, kton_amount: U128, deposits: Vec<U16>}, 2/Payout: {staker: [U8; 20], ring_amount: U128}, 3/Elected: {collators: Vec<[U8; 20]>}}>, 9/Session: Enum<{0/NewSession: {session_index: U32}}>, 12/Democracy: Enum<{0/Proposed: {proposal_index: U32, deposit: U128}, 1/Tabled: {proposal_index: U32, deposit: U128, depositors: Vec<[U8; 20]>}, 2/ExternalTabled: , 3/Started: {ref_index: U32, threshold: Enum<{"0/SuperMajorityApprove", "1/SuperMajorityAgainst", "2/SimpleMajority"}>}, 4/Passed: {ref_index: U32}, 5/NotPassed: {ref_index: U32}, 6/Cancelled: {ref_index: U32}, 7/Executed: {ref_index: U32, result: Enum<{"0/Ok", "1/Err"}>}, 8/Delegated: {who: [U8; 20], target: [U8; 20]}, 9/Undelegated: {account: [U8; 20]}, 10/Vetoed: {who: [U8; 20], proposal_hash: [U8; 32], until: U32}, 11/PreimageNoted: {proposal_hash: [U8; 32], who: [U8; 20], deposit: U128}, 12/PreimageUsed: {proposal_hash: [U8; 32], provider: [U8; 20], deposit: U128}, 13/PreimageInvalid: {proposal_hash: [U8; 32], ref_index: U32}, 14/PreimageMissing: {proposal_hash: [U8; 32], ref_index: U32}, 15/PreimageReaped: {proposal_hash: [U8; 32], provider: [U8; 20], deposit: U128, reaper: [U8; 20]}, 16/Blacklisted: {proposal_hash: [U8; 32]}, 17/Voted: {voter: [U8; 20], ref_index: U32, vote: Enum<{"0/Standard", "1/Split"}>}, 18/Seconded: {seconder: [U8; 20], prop_index: U32}, 19/ProposalCanceled: {prop_index: U32}}>, 13/Council: Enum<{0/Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 14/TechnicalCommittee: Enum<{0/Proposed: {account: [U8; 20], proposal_index: U32, proposal_hash: [U8; 32], threshold: U32}, 1/Voted: {account: [U8; 20], proposal_hash: [U8; 32], voted: Bool, yes: U32, no: U32}, 2/Approved: {proposal_hash: [U8; 32]}, 3/Disapproved: {proposal_hash: [U8; 32]}, 4/Executed: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 5/MemberExecuted: {proposal_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 6/Closed: {proposal_hash: [U8; 32], yes: U32, no: U32}}>, 15/PhragmenElection: Enum<{0/NewTerm: {new_members: Vec<([U8; 20], U128)>}, 1/EmptyTerm: , 2/ElectionError: , 3/MemberKicked: {member: [U8; 20]}, 4/Renounced: {candidate: [U8; 20]}, 5/CandidateSlashed: {candidate: [U8; 20], amount: U128}, 6/SeatHolderSlashed: {seat_holder: [U8; 20], amount: U128}}>, 16/TechnicalMembership: Enum<{0/MemberAdded: , 1/MemberRemoved: , 2/MembersSwapped: , 3/MembersReset: , 4/KeyChanged: , 5/Dummy: }>, 17/Treasury: Enum<{0/Proposed: {proposal_index: U32}, 1/Spending: {budget_remaining: U128}, 2/Awarded: {proposal_index: U32, award: U128, account: [U8; 20]}, 3/Rejected: {proposal_index: U32, slashed: U128}, 4/Burnt: {burnt_funds: U128}, 5/Rollover: {rollover_balance: U128}, 6/Deposit: {value: U128}, 7/SpendApproved: {proposal_index: U32, amount: U128, beneficiary: [U8; 20]}}>, 18/Tips: Enum<{0/NewTip: {tip_hash: [U8; 32]}, 1/TipClosing: {tip_hash: [U8; 32]}, 2/TipClosed: {tip_hash: [U8; 32], who: [U8; 20], payout: U128}, 3/TipRetracted: {tip_hash: [U8; 32]}, 4/TipSlashed: {tip_hash: [U8; 32], finder: [U8; 20], deposit: U128}}>, 19/Sudo: Enum<{0/Sudid: {sudo_result: Enum<{"0/Ok", "1/Err"}>}, 1/KeyChanged: {old_sudoer: Enum<{"0/None", "1/Some"}>}, 2/SudoAsDone: {sudo_result: Enum<{"0/Ok", "1/Err"}>}}>, 20/Vesting: Enum<{0/VestingUpdated: {account: [U8; 20], unvested: U128}, 1/VestingCompleted: {account: [U8; 20]}}>, 21/Utility: Enum<{0/BatchInterrupted: {index: U32, error: Enum<{"0/Other", "1/CannotLookup", "2/BadOrigin", "3/Module", "4/ConsumerRemaining", "5/NoProviders", "6/TooManyConsumers", "7/Token", "8/Arithmetic", "9/Transactional"}>}, 1/BatchCompleted: , 2/BatchCompletedWithErrors: , 3/ItemCompleted: , 4/ItemFailed: {error: Enum<{"0/Other", "1/CannotLookup", "2/BadOrigin", "3/Module", "4/ConsumerRemaining", "5/NoProviders", "6/TooManyConsumers", "7/Token", "8/Arithmetic", "9/Transactional"}>}, 5/DispatchedAs: {result: Enum<{"0/Ok", "1/Err"}>}}>, 22/Identity: Enum<{0/IdentitySet: {who: [U8; 20]}, 1/IdentityCleared: {who: [U8; 20], deposit: U128}, 2/IdentityKilled: {who: [U8; 20], deposit: U128}, 3/JudgementRequested: {who: [U8; 20], registrar_index: U32}, 4/JudgementUnrequested: {who: [U8; 20], registrar_index: U32}, 5/JudgementGiven: {target: [U8; 20], registrar_index: U32}, 6/RegistrarAdded: {registrar_index: U32}, 7/SubIdentityAdded: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 8/SubIdentityRemoved: {sub: [U8; 20], main: [U8; 20], deposit: U128}, 9/SubIdentityRevoked: {sub: [U8; 20], main: [U8; 20], deposit: U128}}>, 23/Scheduler: Enum<{0/Scheduled: {when: U32, index: U32}, 1/Canceled: {when: U32, index: U32}, 2/Dispatched: {task: (U32, U32), id: Enum<{"0/None", "1/Some"}>, result: Enum<{"0/Ok", "1/Err"}>}, 3/CallLookupFailed: {task: (U32, U32), id: Enum<{"0/None", "1/Some"}>, error: Enum<{"0/Unknown", "1/BadFormat"}>}}>, 24/Preimage: Enum<{0/Noted: {hash: [U8; 32]}, 1/Requested: {hash: [U8; 32]}, 2/Cleared: {hash: [U8; 32]}}>, 25/Proxy: Enum<{0/ProxyExecuted: {result: Enum<{"0/Ok", "1/Err"}>}, 1/PureCreated: {pure: [U8; 20], who: [U8; 20], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>, disambiguation_index: U16}, 2/Announced: {real: [U8; 20], proxy: [U8; 20], call_hash: [U8; 32]}, 3/ProxyAdded: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>, delay: U32}, 4/ProxyRemoved: {delegator: [U8; 20], delegatee: [U8; 20], proxy_type: Enum<{"0/Any", "1/NonTransfer", "2/Governance", "3/IdentityJudgement", "4/EthereumBridge"}>, delay: U32}}>, 26/Multisig: Enum<{0/NewMultisig: {approving: [U8; 20], multisig: [U8; 20], call_hash: [U8; 32]}, 1/MultisigApproval: {approving: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32]}, 2/MultisigExecuted: {approving: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32], result: Enum<{"0/Ok", "1/Err"}>}, 3/MultisigCancelled: {cancelling: [U8; 20], timepoint: {height: U32, index: U32}, multisig: [U8; 20], call_hash: [U8; 32]}}>, 27/XcmpQueue: Enum<{0/Success: {message_hash: Enum<{"0/None", "1/Some"}>, weight: {ref_time: U64}}, 1/Fail: {message_hash: Enum<{"0/None", "1/Some"}>, error: Enum<{"0/Overflow", "1/Unimplemented", "2/UntrustedReserveLocation", "3/UntrustedTeleportLocation", "4/MultiLocationFull", "5/MultiLocationNotInvertible", "6/BadOrigin", "7/InvalidLocation", "8/AssetNotFound", "9/FailedToTransactAsset", "10/NotWithdrawable", "11/LocationCannotHold", "12/ExceedsMaxMessageSize", "13/DestinationUnsupported", "14/Transport", "15/Unroutable", "16/UnknownClaim", "17/FailedToDecode", "18/MaxWeightInvalid", "19/NotHoldingFees", "20/TooExpensive", "21/Trap", "22/UnhandledXcmVersion", "23/WeightLimitReached", "24/Barrier", "25/WeightNotComputable"}>, weight: {ref_time: U64}}, 2/BadVersion: {message_hash: Enum<{"0/None", "1/Some"}>}, 3/BadFormat: {message_hash: Enum<{"0/None", "1/Some"}>}, 4/UpwardMessageSent: {message_hash: Enum<{"0/None", "1/Some"}>}, 5/XcmpMessageSent: {message_hash: Enum<{"0/None", "1/Some"}>}, 6/OverweightEnqueued: {sender: U32, sent_at: U32, index: U64, required: {ref_time: U64}}, 7/OverweightServiced: {index: U64, used: {ref_time: U64}}}>, 28/PolkadotXcm: Enum<{0/Attempted: Enum<{"0/Complete", "1/Incomplete", "2/Error"}>, 1/Sent: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, {parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, Vec<Enum<{"0/WithdrawAsset", "1/ReserveAssetDeposited", "2/ReceiveTeleportedAsset", "3/QueryResponse", "4/TransferAsset", "5/TransferReserveAsset", "6/Transact", "7/HrmpNewChannelOpenRequest", "8/HrmpChannelAccepted", "9/HrmpChannelClosing", "10/ClearOrigin", "11/DescendOrigin", "12/ReportError", "13/DepositAsset", "14/DepositReserveAsset", "15/ExchangeAsset", "16/InitiateReserveWithdraw", "17/InitiateTeleport", "18/QueryHolding", "19/BuyExecution", "20/RefundSurplus", "21/SetErrorHandler", "22/SetAppendix", "23/ClearError", "24/ClaimAsset", "25/Trap", "26/SubscribeVersion", "27/UnsubscribeVersion"}>>), 2/UnexpectedResponse: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U64), 3/ResponseReady: (U64, Enum<{"0/Null", "1/Assets", "2/ExecutionResult", "3/Version"}>), 4/Notified: (U64, U8, U8), 5/NotifyOverweight: (U64, U8, U8, {ref_time: U64}, {ref_time: U64}), 6/NotifyDispatchError: (U64, U8, U8), 7/NotifyDecodeFailed: (U64, U8, U8), 8/InvalidResponder: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U64, Enum<{"0/None", "1/Some"}>), 9/InvalidResponderVersion: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U64), 10/ResponseTaken: U64, 11/AssetsTrapped: ([U8; 32], {parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, Enum<{"0/V0", "1/V1"}>), 12/VersionChangeNotified: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U32), 13/SupportedVersionChanged: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U32), 14/NotifyTargetSendFail: ({parents: U8, interior: Enum<{"0/Here", "1/X1", "2/X2", "3/X3", "4/X4", "5/X5", "6/X6", "7/X7", "8/X8"}>}, U64, Enum<{"0/Overflow", "1/Unimplemented", "2/UntrustedReserveLocation", "3/UntrustedTeleportLocation", "4/MultiLocationFull", "5/MultiLocationNotInvertible", "6/BadOrigin", "7/InvalidLocation", "8/AssetNotFound", "9/FailedToTransactAsset", "10/NotWithdrawable", "11/LocationCannotHold", "12/ExceedsMaxMessageSize", "13/DestinationUnsupported", "14/Transport", "15/Unroutable", "16/UnknownClaim", "17/FailedToDecode", "18/MaxWeightInvalid", "19/NotHoldingFees", "20/TooExpensive", "21/Trap", "22/UnhandledXcmVersion", "23/WeightLimitReached", "24/Barrier", "25/WeightNotComputable"}>), 15/NotifyTargetMigrationFail: (Enum<{"0/V0", "1/V1"}>, U64)}>, 29/CumulusXcm: Enum<{0/InvalidFormat: [U8; 8], 1/UnsupportedVersion: [U8; 8], 2/ExecutedDownward: ([U8; 8], Enum<{"0/Complete", "1/Incomplete", "2/Error"}>)}>, 30/DmpQueue: Enum<{0/InvalidFormat: {message_id: [U8; 32]}, 1/UnsupportedVersion: {message_id: [U8; 32]}, 2/ExecutedDownward: {message_id: [U8; 32], outcome: Enum<{"0/Complete", "1/Incomplete", "2/Error"}>}, 3/WeightExhausted: {message_id: [U8; 32], remaining_weight: {ref_time: U64}, required_weight: {ref_time: U64}}, 4/OverweightEnqueued: {message_id: [U8; 32], overweight_index: U64, required_weight: {ref_time: U64}}, 5/OverweightServiced: {overweight_index: U64, weight_used: {ref_time: U64}}}>, 31/Ethereum: Enum<{0/Executed: {from: [U8; 20], to: [U8; 20], transaction_hash: [U8; 32], exit_reason: Enum<{"0/Succeed", "1/Error", "2/Revert", "3/Fatal"}>}}>, 32/Evm: Enum<{0/Log: {log: {address: [U8; 20], topics: Vec<[U8; 32]>, data: Vec<U8>}}, 1/Created: {address: [U8; 20]}, 2/CreatedFailed: {address: [U8; 20]}, 3/Executed: {address: [U8; 20]}, 4/ExecutedFailed: {address: [U8; 20]}}>, 33/BaseFee: Enum<{0/NewBaseFeePerGas: {fee: [U64; 4]}, 1/BaseFeeOverflow: , 2/NewElasticity: {elasticity: U32}}>}>, topics: Vec<[U8; 32]>}>
         */
        events: async (): Promise<string | null> => {
            return await getStorage('System', 'Events');
        },

        /**
         * The number of events in the `Events<T>` list.
         *
         * @return U32
         */
        eventCount: async (): Promise<string | null> => {
            return await getStorage('System', 'EventCount');
        },

        /**
         * Mapping between a topic (represented by T::Hash) and a vector of indexes
         * of events in the `<Events<T>>` list.
         *
         * All topic vectors have deterministic storage locations depending on the topic. This
         * allows light-clients to leverage the changes trie storage tracking mechanism and
         * in case of changes fetch the list of events of interest.
         *
         * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
         * the `EventIndex` then in case if the topic has the same contents on the next block
         * no notification will be triggered thus the event might be lost.
         *
         * @param param0: H256: [U8; 32]
         * @return Vec<(U32, U32)>
         */
        eventTopics: async (param0: unknown): Promise<string | null> => {
            return await getStorage('System', 'EventTopics', param0);
        },

        /**
         * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
         *
         * @return LastRuntimeUpgradeInfo: {spec_version: Compact<U32>, spec_name: Str}
         */
        lastRuntimeUpgrade: async (): Promise<string | null> => {
            return await getStorage('System', 'LastRuntimeUpgrade');
        },

        /**
         * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
         *
         * @return Bool
         */
        upgradedToU32RefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToU32RefCount');
        },

        /**
         * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
         * (default) if not.
         *
         * @return Bool
         */
        upgradedToTripleRefCount: async (): Promise<string | null> => {
            return await getStorage('System', 'UpgradedToTripleRefCount');
        },

        /**
         * The execution phase of the block.
         *
         * @return Phase: Enum<{0/ApplyExtrinsic: U32, 1/Finalization: , 2/Initialization: }>
         */
        executionPhase: async (): Promise<string | null> => {
            return await getStorage('System', 'ExecutionPhase');
        },
    };
};
