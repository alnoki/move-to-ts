import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as Std from "../Std";
export const packageName = "AptosFramework";
export const moduleAddress = new HexString("0x1");
export const moduleName = "TransactionContext";


export function get_script_hash$ (
  $c: AptosDataCache,
): U8[] {
  return $.AptosFramework_TransactionContext_get_script_hash($c);

}
export function unit_test_poison$ (
  $c: AptosDataCache,
): void {
  Std.UnitTest.create_signers_for_testing$(u64("0"), $c);
  return;
}


