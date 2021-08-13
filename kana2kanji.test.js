import * as t from "https://deno.land/std/testing/asserts.ts";
import { kana2kanji } from "./kana2kanji.js";

Deno.test("test", async () => {
  t.assertEquals(await kana2kanji("さばえ"), [ [ "さばえ", [ "鯖江", "サバエ", "佐波江", "sabae", "Sabae" ] ] ]);
  t.assertEquals(await kana2kanji("めがねのまち、さばえ"), [
    [ "めがねの", [ "メガネの", "眼鏡の", "めがねの", "meganeの", "Meganeの" ] ],
    [ "まち", [ "街", "待ち", "まち", "町", "待" ] ],
    [ "、", [ "、", "・", "，", ",", "､" ] ],
    [ "さばえ", [ "鯖江", "サバエ", "佐波江", "sabae", "Sabae" ] ]
  ]);
});
