import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as UnitTest from "./UnitTest";
export const packageName = "MoveStdlib";
export const moduleAddress = new HexString("0x1");
export const moduleName = "BCS";


export function to_bytes$ (
  v: any,
  $c: AptosDataCache,
  $p: TypeTag[], /* <MoveValue>*/
): U8[] {
  return $.Std_BCS_to_bytes(v, $c, [$p[0]]);

}
export function unit_test_poison$ (
  $c: AptosDataCache,
): void {
  UnitTest.create_signers_for_testing$(u64("0"), $c);
  return;
}


