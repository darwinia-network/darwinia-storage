import { buildRuntimeCall, Dispatch } from "../../../call";
import { ethers, BytesLike } from "ethers";
import { Metadata } from "@polkadot/types";
import {  } from "ethers";

export const getScheduler = (dispatch: Dispatch, metadata: Metadata) => {
    return {
        /**
         * Anonymously schedule a task.
         *
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 2/Babe: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/plan_config_change"}>, 3/Timestamp: Enum<{"0/set"}>, 4/Indices: Enum<{"0/claim", "1/transfer", "2/free", "3/force_transfer", "4/freeze"}>, 23/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 24/Kton: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 6/Authorship: Enum<{"0/set_uncles"}>, 38/ElectionProviderMultiPhase: Enum<{"0/submit_unsigned", "1/set_minimum_untrusted_score", "2/set_emergency_election_result", "3/submit"}>, 25/Staking: Enum<{"0/bond", "1/bond_extra", "2/deposit_extra", "3/unbond", "4/withdraw_unbonded", "5/claim_mature_deposits", "6/try_claim_deposits_with_punish", "7/validate", "8/nominate", "9/chill", "10/set_payee", "11/set_controller", "12/set_validator_count", "13/increase_validator_count", "14/scale_validator_count", "15/force_no_eras", "16/force_new_era", "17/set_invulnerables", "18/force_unstake", "19/force_new_era_always", "20/cancel_deferred_slash", "21/payout_stakers", "22/rebond", "23/set_history_depth", "24/reap_stash", "25/kick", "26/set_staking_configs", "27/chill_other"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 11/Grandpa: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/note_stalled"}>, 12/ImOnline: Enum<{"0/heartbeat"}>, 36/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 14/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 26/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 32/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal"}>, 44/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 45/Bounties: Enum<{"0/propose_bounty", "1/approve_bounty", "2/propose_curator", "3/unassign_curator", "4/accept_curator", "5/award_bounty", "6/claim_bounty", "7/close_bounty", "8/extend_bounty_expiry"}>, 17/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as"}>, 18/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 19/Society: Enum<{"0/bid", "1/unbid", "2/vouch", "3/unvouch", "4/vote", "5/defender_vote", "6/payout", "7/found", "8/unfound", "9/judge_suspended_member", "10/judge_suspended_candidate", "11/set_max_members"}>, 20/Recovery: Enum<{"0/as_recovered", "1/set_recovered", "2/create_recovery", "3/initiate_recovery", "4/vouch_recovery", "5/claim_recovery", "6/close_recovery", "7/remove_recovery", "8/cancel_recovered"}>, 21/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 58/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 41/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 33/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/anonymous", "5/kill_anonymous", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 34/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 39/EVM: Enum<{"0/call", "1/create", "2/create2"}>, 40/Ethereum: Enum<{"0/transact", "1/message_transact"}>, 51/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_is_active", "2/set_elasticity"}>, 48/BridgeDarwiniaMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 47/BridgeDarwiniaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 52/BridgeKusamaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 53/BridgeKusamaParachain: Enum<{"0/submit_parachain_heads"}>, 56/BridgeCrabParachainMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 49/DarwiniaFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>, 55/CrabParachainFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>}>, 1/Hash: [U8; 32]}>
         */
        schedule: async (signer: ethers.Signer, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', false, _when, _maybe_periodic, _priority, _call);
        },

        scheduleD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'schedule', true, data);
        },

        scheduleCall: (_when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'schedule', {
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
         * Cancel an anonymously scheduled task.
         *
         * @param _when: U32
         * @param _index: U32
         */
        cancel: async (signer: ethers.Signer, _when: unknown, _index: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', false, _when, _index);
        },

        cancelD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancel', true, data);
        },

        cancelCall: (_when: unknown, _index: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancel', {
                when: _when,
                index: _index,
            });
        },

        /**
         * Schedule a named task.
         *
         * @param _id: Vec<U8>
         * @param _when: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 2/Babe: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/plan_config_change"}>, 3/Timestamp: Enum<{"0/set"}>, 4/Indices: Enum<{"0/claim", "1/transfer", "2/free", "3/force_transfer", "4/freeze"}>, 23/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 24/Kton: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 6/Authorship: Enum<{"0/set_uncles"}>, 38/ElectionProviderMultiPhase: Enum<{"0/submit_unsigned", "1/set_minimum_untrusted_score", "2/set_emergency_election_result", "3/submit"}>, 25/Staking: Enum<{"0/bond", "1/bond_extra", "2/deposit_extra", "3/unbond", "4/withdraw_unbonded", "5/claim_mature_deposits", "6/try_claim_deposits_with_punish", "7/validate", "8/nominate", "9/chill", "10/set_payee", "11/set_controller", "12/set_validator_count", "13/increase_validator_count", "14/scale_validator_count", "15/force_no_eras", "16/force_new_era", "17/set_invulnerables", "18/force_unstake", "19/force_new_era_always", "20/cancel_deferred_slash", "21/payout_stakers", "22/rebond", "23/set_history_depth", "24/reap_stash", "25/kick", "26/set_staking_configs", "27/chill_other"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 11/Grandpa: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/note_stalled"}>, 12/ImOnline: Enum<{"0/heartbeat"}>, 36/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 14/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 26/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 32/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal"}>, 44/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 45/Bounties: Enum<{"0/propose_bounty", "1/approve_bounty", "2/propose_curator", "3/unassign_curator", "4/accept_curator", "5/award_bounty", "6/claim_bounty", "7/close_bounty", "8/extend_bounty_expiry"}>, 17/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as"}>, 18/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 19/Society: Enum<{"0/bid", "1/unbid", "2/vouch", "3/unvouch", "4/vote", "5/defender_vote", "6/payout", "7/found", "8/unfound", "9/judge_suspended_member", "10/judge_suspended_candidate", "11/set_max_members"}>, 20/Recovery: Enum<{"0/as_recovered", "1/set_recovered", "2/create_recovery", "3/initiate_recovery", "4/vouch_recovery", "5/claim_recovery", "6/close_recovery", "7/remove_recovery", "8/cancel_recovered"}>, 21/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 58/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 41/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 33/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/anonymous", "5/kill_anonymous", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 34/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 39/EVM: Enum<{"0/call", "1/create", "2/create2"}>, 40/Ethereum: Enum<{"0/transact", "1/message_transact"}>, 51/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_is_active", "2/set_elasticity"}>, 48/BridgeDarwiniaMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 47/BridgeDarwiniaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 52/BridgeKusamaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 53/BridgeKusamaParachain: Enum<{"0/submit_parachain_heads"}>, 56/BridgeCrabParachainMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 49/DarwiniaFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>, 55/CrabParachainFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamed: async (signer: ethers.Signer, _id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', false, _id, _when, _maybe_periodic, _priority, _call);
        },

        scheduleNamedD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamed', true, data);
        },

        scheduleNamedCall: (_id: unknown, _when: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamed', {
                id: _id,
                when: _when,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
         * Cancel a named scheduled task.
         *
         * @param _id: Vec<U8>
         */
        cancelNamed: async (signer: ethers.Signer, _id: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', false, _id);
        },

        cancelNamedD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'cancelNamed', true, data);
        },

        cancelNamedCall: (_id: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'cancelNamed', {
                id: _id,
            });
        },

        /**
         * Anonymously schedule a task after a delay.
         * 
         * # <weight>
         * Same as [`schedule`].
         * # </weight>
         *
         * @param _after: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 2/Babe: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/plan_config_change"}>, 3/Timestamp: Enum<{"0/set"}>, 4/Indices: Enum<{"0/claim", "1/transfer", "2/free", "3/force_transfer", "4/freeze"}>, 23/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 24/Kton: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 6/Authorship: Enum<{"0/set_uncles"}>, 38/ElectionProviderMultiPhase: Enum<{"0/submit_unsigned", "1/set_minimum_untrusted_score", "2/set_emergency_election_result", "3/submit"}>, 25/Staking: Enum<{"0/bond", "1/bond_extra", "2/deposit_extra", "3/unbond", "4/withdraw_unbonded", "5/claim_mature_deposits", "6/try_claim_deposits_with_punish", "7/validate", "8/nominate", "9/chill", "10/set_payee", "11/set_controller", "12/set_validator_count", "13/increase_validator_count", "14/scale_validator_count", "15/force_no_eras", "16/force_new_era", "17/set_invulnerables", "18/force_unstake", "19/force_new_era_always", "20/cancel_deferred_slash", "21/payout_stakers", "22/rebond", "23/set_history_depth", "24/reap_stash", "25/kick", "26/set_staking_configs", "27/chill_other"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 11/Grandpa: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/note_stalled"}>, 12/ImOnline: Enum<{"0/heartbeat"}>, 36/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 14/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 26/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 32/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal"}>, 44/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 45/Bounties: Enum<{"0/propose_bounty", "1/approve_bounty", "2/propose_curator", "3/unassign_curator", "4/accept_curator", "5/award_bounty", "6/claim_bounty", "7/close_bounty", "8/extend_bounty_expiry"}>, 17/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as"}>, 18/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 19/Society: Enum<{"0/bid", "1/unbid", "2/vouch", "3/unvouch", "4/vote", "5/defender_vote", "6/payout", "7/found", "8/unfound", "9/judge_suspended_member", "10/judge_suspended_candidate", "11/set_max_members"}>, 20/Recovery: Enum<{"0/as_recovered", "1/set_recovered", "2/create_recovery", "3/initiate_recovery", "4/vouch_recovery", "5/claim_recovery", "6/close_recovery", "7/remove_recovery", "8/cancel_recovered"}>, 21/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 58/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 41/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 33/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/anonymous", "5/kill_anonymous", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 34/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 39/EVM: Enum<{"0/call", "1/create", "2/create2"}>, 40/Ethereum: Enum<{"0/transact", "1/message_transact"}>, 51/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_is_active", "2/set_elasticity"}>, 48/BridgeDarwiniaMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 47/BridgeDarwiniaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 52/BridgeKusamaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 53/BridgeKusamaParachain: Enum<{"0/submit_parachain_heads"}>, 56/BridgeCrabParachainMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 49/DarwiniaFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>, 55/CrabParachainFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleAfter: async (signer: ethers.Signer, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', false, _after, _maybe_periodic, _priority, _call);
        },

        scheduleAfterD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleAfter', true, data);
        },

        scheduleAfterCall: (_after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleAfter', {
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

        /**
         * Schedule a named task after a delay.
         * 
         * # <weight>
         * Same as [`schedule_named`](Self::schedule_named).
         * # </weight>
         *
         * @param _id: Vec<U8>
         * @param _after: U32
         * @param _maybe_periodic: Enum<{0/None: , 1/Some: (U32, U32)}>
         * @param _priority: U8
         * @param _call: Enum<{0/Value: Enum<{0/System: Enum<{"0/fill_block", "1/remark", "2/set_heap_pages", "3/set_code", "4/set_code_without_checks", "5/set_storage", "6/kill_storage", "7/kill_prefix", "8/remark_with_event"}>, 2/Babe: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/plan_config_change"}>, 3/Timestamp: Enum<{"0/set"}>, 4/Indices: Enum<{"0/claim", "1/transfer", "2/free", "3/force_transfer", "4/freeze"}>, 23/Balances: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 24/Kton: Enum<{"0/transfer", "1/set_balance", "2/force_transfer", "3/transfer_keep_alive", "4/transfer_all", "5/force_unreserve"}>, 6/Authorship: Enum<{"0/set_uncles"}>, 38/ElectionProviderMultiPhase: Enum<{"0/submit_unsigned", "1/set_minimum_untrusted_score", "2/set_emergency_election_result", "3/submit"}>, 25/Staking: Enum<{"0/bond", "1/bond_extra", "2/deposit_extra", "3/unbond", "4/withdraw_unbonded", "5/claim_mature_deposits", "6/try_claim_deposits_with_punish", "7/validate", "8/nominate", "9/chill", "10/set_payee", "11/set_controller", "12/set_validator_count", "13/increase_validator_count", "14/scale_validator_count", "15/force_no_eras", "16/force_new_era", "17/set_invulnerables", "18/force_unstake", "19/force_new_era_always", "20/cancel_deferred_slash", "21/payout_stakers", "22/rebond", "23/set_history_depth", "24/reap_stash", "25/kick", "26/set_staking_configs", "27/chill_other"}>, 9/Session: Enum<{"0/set_keys", "1/purge_keys"}>, 11/Grandpa: Enum<{"0/report_equivocation", "1/report_equivocation_unsigned", "2/note_stalled"}>, 12/ImOnline: Enum<{"0/heartbeat"}>, 36/Democracy: Enum<{"0/propose", "1/second", "2/vote", "3/emergency_cancel", "4/external_propose", "5/external_propose_majority", "6/external_propose_default", "7/fast_track", "8/veto_external", "9/cancel_referendum", "10/cancel_queued", "11/delegate", "12/undelegate", "13/clear_public_proposals", "14/note_preimage", "15/note_preimage_operational", "16/note_imminent_preimage", "17/note_imminent_preimage_operational", "18/reap_preimage", "19/unlock", "20/remove_vote", "21/remove_other_vote", "22/enact_proposal", "23/blacklist", "24/cancel_proposal"}>, 14/Council: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 15/TechnicalCommittee: Enum<{"0/set_members", "1/execute", "2/propose", "3/vote", "4/close", "5/disapprove_proposal"}>, 26/PhragmenElection: Enum<{"0/vote", "1/remove_voter", "2/submit_candidacy", "3/renounce_candidacy", "4/remove_member", "5/clean_defunct_voters"}>, 16/TechnicalMembership: Enum<{"0/add_member", "1/remove_member", "2/swap_member", "3/reset_members", "4/change_key", "5/set_prime", "6/clear_prime"}>, 32/Treasury: Enum<{"0/propose_spend", "1/reject_proposal", "2/approve_proposal"}>, 44/Tips: Enum<{"0/report_awesome", "1/retract_tip", "2/tip_new", "3/tip", "4/close_tip", "5/slash_tip"}>, 45/Bounties: Enum<{"0/propose_bounty", "1/approve_bounty", "2/propose_curator", "3/unassign_curator", "4/accept_curator", "5/award_bounty", "6/claim_bounty", "7/close_bounty", "8/extend_bounty_expiry"}>, 17/Utility: Enum<{"0/batch", "1/as_derivative", "2/batch_all", "3/dispatch_as"}>, 18/Identity: Enum<{"0/add_registrar", "1/set_identity", "2/set_subs", "3/clear_identity", "4/request_judgement", "5/cancel_request", "6/set_fee", "7/set_account_id", "8/set_fields", "9/provide_judgement", "10/kill_identity", "11/add_sub", "12/rename_sub", "13/remove_sub", "14/quit_sub"}>, 19/Society: Enum<{"0/bid", "1/unbid", "2/vouch", "3/unvouch", "4/vote", "5/defender_vote", "6/payout", "7/found", "8/unfound", "9/judge_suspended_member", "10/judge_suspended_candidate", "11/set_max_members"}>, 20/Recovery: Enum<{"0/as_recovered", "1/set_recovered", "2/create_recovery", "3/initiate_recovery", "4/vouch_recovery", "5/claim_recovery", "6/close_recovery", "7/remove_recovery", "8/cancel_recovered"}>, 21/Scheduler: Enum<{"0/schedule", "1/cancel", "2/schedule_named", "3/cancel_named", "4/schedule_after", "5/schedule_named_after"}>, 58/Preimage: Enum<{"0/note_preimage", "1/unnote_preimage", "2/request_preimage", "3/unrequest_preimage"}>, 41/Vesting: Enum<{"0/vest", "1/vest_other", "2/vested_transfer", "3/force_vested_transfer", "4/merge_schedules"}>, 33/Proxy: Enum<{"0/proxy", "1/add_proxy", "2/remove_proxy", "3/remove_proxies", "4/anonymous", "5/kill_anonymous", "6/announce", "7/remove_announcement", "8/reject_announcement", "9/proxy_announced"}>, 34/Multisig: Enum<{"0/as_multi_threshold_1", "1/as_multi", "2/approve_as_multi", "3/cancel_as_multi"}>, 39/EVM: Enum<{"0/call", "1/create", "2/create2"}>, 40/Ethereum: Enum<{"0/transact", "1/message_transact"}>, 51/BaseFee: Enum<{"0/set_base_fee_per_gas", "1/set_is_active", "2/set_elasticity"}>, 48/BridgeDarwiniaMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 47/BridgeDarwiniaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 52/BridgeKusamaGrandpa: Enum<{"0/submit_finality_proof", "1/initialize", "2/set_owner", "3/set_operational"}>, 53/BridgeKusamaParachain: Enum<{"0/submit_parachain_heads"}>, 56/BridgeCrabParachainMessages: Enum<{"0/set_owner", "1/set_operating_mode", "2/update_pallet_parameter", "3/send_message", "4/increase_message_fee", "5/receive_messages_proof", "6/receive_messages_delivery_proof"}>, 49/DarwiniaFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>, 55/CrabParachainFeeMarket: Enum<{"0/enroll_and_lock_collateral", "1/update_locked_collateral", "2/update_relay_fee", "3/cancel_enrollment", "4/set_slash_protect", "5/set_assigned_relayers_number"}>}>, 1/Hash: [U8; 32]}>
         */
        scheduleNamedAfter: async (signer: ethers.Signer, _id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', false, _id, _after, _maybe_periodic, _priority, _call);
        },

        scheduleNamedAfterD: async (signer: ethers.Signer, data: BytesLike): Promise<ethers.providers.TransactionReceipt> => {
            return await dispatch(signer, 'Scheduler', 'scheduleNamedAfter', true, data);
        },

        scheduleNamedAfterCall: (_id: unknown, _after: unknown, _maybe_periodic: unknown, _priority: unknown, _call: unknown) => {
            return buildRuntimeCall(metadata, 'Scheduler', 'scheduleNamedAfter', {
                id: _id,
                after: _after,
                maybe_periodic: _maybe_periodic,
                priority: _priority,
                call: _call,
            });
        },

    }
}
