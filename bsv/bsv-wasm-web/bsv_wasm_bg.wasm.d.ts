/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_transaction_free(a: number): void;
export function transaction_get_version(a: number): number;
export function transaction_get_ninputs(a: number): number;
export function transaction_get_noutputs(a: number): number;
export function transaction_get_input(a: number, b: number): number;
export function transaction_get_output(a: number, b: number): number;
export function transaction_get_n_locktime(a: number): number;
export function transaction_get_n_locktime_as_bytes(a: number, b: number): void;
export function transaction_new(a: number, b: number): number;
export function transaction_set_version(a: number, b: number): number;
export function transaction_set_nlocktime(a: number, b: number): number;
export function transaction_add_input(a: number, b: number): void;
export function transaction_prepend_input(a: number, b: number): void;
export function transaction_insert_input(a: number, b: number, c: number): void;
export function transaction_add_output(a: number, b: number): void;
export function transaction_prepend_output(a: number, b: number): void;
export function transaction_insert_output(a: number, b: number, c: number): void;
export function transaction_set_input(a: number, b: number, c: number): void;
export function transaction_set_output(a: number, b: number, c: number): void;
export function transaction_is_coinbase_impl(a: number): number;
export function transaction_satoshis_in(a: number, b: number): void;
export function transaction_satoshis_out(a: number): number;
export function transaction_from_hex(a: number, b: number, c: number): void;
export function transaction_from_bytes(a: number, b: number, c: number): void;
export function transaction_to_json_string(a: number, b: number): void;
export function transaction_from_json_string(a: number, b: number, c: number): void;
export function transaction_to_json(a: number, b: number): void;
export function transaction_to_bytes(a: number, b: number): void;
export function transaction_to_hex(a: number, b: number): void;
export function transaction_get_size(a: number, b: number): void;
export function transaction_add_inputs(a: number, b: number, c: number): void;
export function transaction_get_outpoints(a: number, b: number): void;
export function transaction_add_outputs(a: number, b: number, c: number): void;
export function transaction_get_id_hex(a: number, b: number): void;
export function transaction_get_id_bytes(a: number, b: number): void;
export function transaction_to_compact_bytes(a: number, b: number): void;
export function transaction_to_compact_hex(a: number, b: number): void;
export function transaction_from_compact_bytes(a: number, b: number, c: number): void;
export function transaction_from_compact_hex(a: number, b: number, c: number): void;
export function transaction_is_coinbase(a: number): number;
export function transaction_sign(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function transaction_sign_with_k(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
): void;
export function transaction_sighash_preimage(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function transaction_verify(a: number, b: number, c: number): number;
export function __wbg_extendedprivatekey_free(a: number): void;
export function extendedprivatekey_get_private_key(a: number): number;
export function extendedprivatekey_get_public_key(a: number): number;
export function extendedprivatekey_get_chain_code(a: number, b: number): void;
export function extendedprivatekey_get_depth(a: number): number;
export function extendedprivatekey_get_parent_fingerprint(a: number, b: number): void;
export function extendedprivatekey_get_index(a: number): number;
export function extendedprivatekey_derive(a: number, b: number, c: number): void;
export function extendedprivatekey_derive_from_path(a: number, b: number, c: number, d: number): void;
export function extendedprivatekey_from_seed(a: number, b: number, c: number): void;
export function extendedprivatekey_from_random(a: number): void;
export function extendedprivatekey_from_string(a: number, b: number, c: number): void;
export function extendedprivatekey_to_string(a: number, b: number): void;
export function extendedprivatekey_from_mnemonic(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_sighashsignature_free(a: number): void;
export function sighashsignature_new(a: number, b: number, c: number, d: number): number;
export function sighashsignature_to_hex(a: number, b: number): void;
export function sighashsignature_to_bytes(a: number, b: number): void;
export function sighashsignature_from_bytes(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_hash_free(a: number): void;
export function hash_to_bytes(a: number, b: number): void;
export function hash_to_hex(a: number, b: number): void;
export function hash_sha_256d(a: number, b: number): number;
export function hash_sha_256(a: number, b: number): number;
export function hash_sha_1(a: number, b: number): number;
export function hash_ripemd_160(a: number, b: number): number;
export function hash_hash_160(a: number, b: number): number;
export function hash_sha_512(a: number, b: number): number;
export function hash_sha_256_hmac(a: number, b: number, c: number, d: number): number;
export function hash_sha_1_hmac(a: number, b: number, c: number, d: number): number;
export function hash_ripemd_160_hmac(a: number, b: number, c: number, d: number): number;
export function hash_hash_160_hmac(a: number, b: number, c: number, d: number): number;
export function __wbg_extendedpublickey_free(a: number): void;
export function extendedpublickey_get_public_key(a: number): number;
export function extendedpublickey_from_xpriv(a: number): number;
export function extendedpublickey_get_chain_code(a: number, b: number): void;
export function extendedpublickey_get_depth(a: number): number;
export function extendedpublickey_get_parent_fingerprint(a: number, b: number): void;
export function extendedpublickey_get_index(a: number): number;
export function extendedpublickey_derive(a: number, b: number, c: number): void;
export function extendedpublickey_derive_from_path(a: number, b: number, c: number, d: number): void;
export function extendedpublickey_from_seed(a: number, b: number, c: number): void;
export function extendedpublickey_from_random(a: number): void;
export function extendedpublickey_from_string(a: number, b: number, c: number): void;
export function extendedpublickey_to_string(a: number, b: number): void;
export function hash_sha_512_hmac(a: number, b: number, c: number, d: number): number;
export function hash_sha_256d_hmac(a: number, b: number, c: number, d: number): number;
export function __wbg_interpreter_free(a: number): void;
export function interpreter_from_transaction(a: number, b: number, c: number): void;
export function interpreter_from_script(a: number): number;
export function interpreter_run(a: number, b: number): void;
export function interpreter_next(a: number, b: number): void;
export function interpreter_get_state(a: number): number;
export function __wbg_state_free(a: number): void;
export function state_get_executed_script(a: number, b: number): void;
export function state_get_stack(a: number, b: number): void;
export function state_get_alt_stack(a: number, b: number): void;
export function state_get_status(a: number): number;
export function __wbg_p2pkhaddress_free(a: number): void;
export function p2pkhaddress_from_pubkey_hash(a: number, b: number, c: number): void;
export function p2pkhaddress_from_pubkey(a: number, b: number): void;
export function p2pkhaddress_set_chain_params(a: number, b: number, c: number): void;
export function p2pkhaddress_to_string(a: number, b: number): void;
export function p2pkhaddress_from_string(a: number, b: number, c: number): void;
export function p2pkhaddress_get_locking_script(a: number, b: number): void;
export function p2pkhaddress_get_unlocking_script(a: number, b: number, c: number, d: number): void;
export function p2pkhaddress_verify_bitcoin_message(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_script_free(a: number): void;
export function script_to_asm_string(a: number, b: number): void;
export function script_to_extended_asm_string(a: number, b: number): void;
export function script_from_hex(a: number, b: number, c: number): void;
export function script_from_bytes(a: number, b: number, c: number): void;
export function script_from_asm_string(a: number, b: number, c: number): void;
export function script_encode_pushdata(a: number, b: number, c: number): void;
export function script_get_pushdata_bytes(a: number, b: number): void;
export function script_to_script_bits(a: number, b: number): void;
export function script_to_bytes(a: number, b: number): void;
export function script_get_script_length(a: number): number;
export function script_to_hex(a: number, b: number): void;
export function script_remove_codeseparators(a: number): void;
export function ecdh_derive_shared_key(a: number, b: number, c: number): void;
export function ecdsa_private_key_from_signature_k(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
): void;
export function ecdsa_sign_with_random_k(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function ecdsa_sign_with_deterministic_k(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function ecdsa_sign_with_k(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function ecdsa_verify_digest(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function aes_encrypt(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
): void;
export function aes_decrypt(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number,
  g: number,
  h: number,
): void;
export function __wbg_ecdh_free(a: number): void;
export function __wbg_ecdsa_free(a: number): void;
export function __wbg_aes_free(a: number): void;
export function __wbg_kdf_free(a: number): void;
export function kdf_get_hash(a: number): number;
export function kdf_get_salt(a: number, b: number): void;
export function kdf_pbkdf2(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function __wbg_txout_free(a: number): void;
export function txout_new(a: number, b: number): number;
export function txout_get_satoshis(a: number): number;
export function txout_get_satoshis_as_bytes(a: number, b: number): void;
export function txout_get_script_pub_key_size(a: number): number;
export function txout_get_script_pub_key(a: number): number;
export function txout_get_script_pub_key_hex(a: number, b: number): void;
export function txout_from_hex(a: number, b: number, c: number): void;
export function txout_to_bytes(a: number, b: number): void;
export function txout_to_hex(a: number, b: number): void;
export function txout_to_json(a: number, b: number): void;
export function txout_to_json_string(a: number, b: number): void;
export function ecies_encrypt(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function ecies_encrypt_with_ephemeral_private_key(a: number, b: number, c: number, d: number): void;
export function ecies_decrypt(a: number, b: number, c: number, d: number): void;
export function ecies_derive_cipher_keys(a: number, b: number, c: number): void;
export function __wbg_cipherkeys_free(a: number): void;
export function cipherkeys_get_iv(a: number, b: number): void;
export function cipherkeys_get_ke(a: number, b: number): void;
export function cipherkeys_get_km(a: number, b: number): void;
export function __wbg_eciesciphertext_free(a: number): void;
export function eciesciphertext_get_ciphertext(a: number, b: number): void;
export function eciesciphertext_get_hmac(a: number, b: number): void;
export function eciesciphertext_get_cipher_keys(a: number): number;
export function eciesciphertext_to_bytes(a: number, b: number): void;
export function eciesciphertext_extract_public_key(a: number, b: number): void;
export function eciesciphertext_from_bytes(a: number, b: number, c: number, d: number): void;
export function __wbg_ecies_free(a: number): void;
export function __wbg_signature_free(a: number): void;
export function __wbg_recoveryinfo_free(a: number): void;
export function recoveryinfo_new(a: number, b: number, c: number): number;
export function recoveryinfo_from_byte(a: number, b: number): number;
export function signature_from_der(a: number, b: number, c: number): void;
export function signature_from_hex_der(a: number, b: number, c: number): void;
export function signature_from_compact_bytes(a: number, b: number, c: number): void;
export function signature_recover_public_key(a: number, b: number, c: number, d: number, e: number): void;
export function signature_to_der_hex(a: number, b: number): void;
export function signature_to_der_bytes(a: number, b: number): void;
export function signature_to_compact_bytes(a: number, b: number, c: number): void;
export function signature_r(a: number, b: number): void;
export function signature_r_hex(a: number, b: number): void;
export function signature_s(a: number, b: number): void;
export function signature_s_hex(a: number, b: number): void;
export function signature_to_compact_hex(a: number, b: number, c: number): void;
export function signature_verify_message(a: number, b: number, c: number, d: number): number;
export function __wbg_publickey_free(a: number): void;
export function publickey_to_address(a: number, b: number): void;
export function publickey_from_hex(a: number, b: number, c: number): void;
export function publickey_from_bytes(a: number, b: number, c: number): void;
export function publickey_to_bytes(a: number, b: number): void;
export function publickey_to_hex(a: number, b: number): void;
export function publickey_from_private_key(a: number): number;
export function publickey_verify_message(a: number, b: number, c: number, d: number, e: number): void;
export function publickey_to_compressed(a: number, b: number): void;
export function publickey_to_decompressed(a: number, b: number): void;
export function publickey_encrypt_message(a: number, b: number, c: number, d: number, e: number): void;
export function publickey_is_valid_message(a: number, b: number, c: number, d: number): number;
export function publickey_is_compressed(a: number): number;
export function publickey_to_p2pkh_address(a: number, b: number): void;
export function bsm_is_valid_message(a: number, b: number, c: number, d: number): number;
export function bsm_verify_message(a: number, b: number, c: number, d: number, e: number): void;
export function bsm_sign_message(a: number, b: number, c: number, d: number): void;
export function bsm_sign_message_with_k(a: number, b: number, c: number, d: number, e: number): void;
export function __wbg_chainparams_free(a: number): void;
export function chainparams_mainnet(): number;
export function chainparams_testnet(): number;
export function chainparams_regtest(): number;
export function chainparams_stn(): number;
export function __wbg_privatekey_free(a: number): void;
export function privatekey_to_bytes(a: number, b: number): void;
export function privatekey_to_hex(a: number, b: number): void;
export function privatekey_from_random(): number;
export function privatekey_get_point(a: number, b: number): void;
export function privatekey_compress_public_key(a: number, b: number): number;
export function privatekey_from_wif(a: number, b: number, c: number): void;
export function privatekey_from_hex(a: number, b: number, c: number): void;
export function privatekey_sign_message(a: number, b: number, c: number, d: number): void;
export function privatekey_to_wif(a: number, b: number): void;
export function privatekey_from_bytes(a: number, b: number, c: number): void;
export function privatekey_to_public_key(a: number, b: number): void;
export function privatekey_encrypt_message(a: number, b: number, c: number, d: number): void;
export function privatekey_decrypt_message(a: number, b: number, c: number, d: number): void;
export function chainparams_new(): number;
export function __wbg_bsm_free(a: number): void;
export function __wbg_txin_free(a: number): void;
export function txin_new(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function txin_empty(): number;
export function txin_get_prev_tx_id(a: number, b: number, c: number): void;
export function txin_get_prev_tx_id_hex(a: number, b: number, c: number): void;
export function txin_get_vout(a: number): number;
export function txin_get_unlocking_script_size(a: number): number;
export function txin_get_unlocking_script(a: number): number;
export function txin_get_unlocking_script_hex(a: number, b: number): void;
export function txin_get_sequence(a: number): number;
export function txin_get_sequence_as_bytes(a: number, b: number): void;
export function txin_get_outpoint_bytes(a: number, b: number, c: number): void;
export function txin_get_outpoint_hex(a: number, b: number, c: number): void;
export function txin_set_unlocking_script(a: number, b: number): void;
export function txin_set_prev_tx_id(a: number, b: number, c: number): void;
export function txin_set_vout(a: number, b: number): void;
export function txin_set_sequence(a: number, b: number): void;
export function txin_set_satoshis(a: number, b: number): void;
export function txin_get_satoshis(a: number, b: number): void;
export function txin_set_locking_script(a: number, b: number): void;
export function txin_get_locking_script(a: number): number;
export function txin_get_locking_script_bytes(a: number, b: number): void;
export function txin_from_hex(a: number, b: number, c: number): void;
export function txin_to_json(a: number, b: number): void;
export function txin_to_json_string(a: number, b: number): void;
export function txin_to_bytes(a: number, b: number): void;
export function txin_to_hex(a: number, b: number): void;
export function txin_from_outpoint_bytes(a: number, b: number, c: number): void;
export function txin_to_compact_bytes(a: number, b: number): void;
export function txin_to_compact_hex(a: number, b: number): void;
export function txin_from_compact_bytes(a: number, b: number, c: number): void;
export function txin_from_compact_hex(a: number, b: number, c: number): void;
export function txin_get_finalised_script(a: number, b: number): void;
export function txin_is_coinbase(a: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
