# kana2kanji

[Google Japanese Input CGI API](https://www.google.co.jp/ime/cgiapi.html) を利用して、日本語のひらがなを漢字に変換する、軽量で依存関係のないJavaScriptモジュールです。

## 機能

- ひらがなテキストを複数の漢字、カタカナ、ローマ字の候補に変換します。
- 入力テキストを自動的に分割し、各部分の変換候補を提供します。
- モダンブラウザおよびDeno環境において、ESモジュールとしてインポートして直接動作します。

## 使い方

`kana2kanji` 関数をインポートし、ひらがなの文字列を引数として呼び出します。この関数は、元のひらがな部分と変換候補のリストを含むセグメントの配列を解決するPromiseを返します。

```js
import { kana2kanji } from "https://code4fukui.github.io/kana2kanji/kana2kanji.js";

const text = "めがねのまち、さばえ";
const result = await kana2kanji(text);

console.log(result);
```

**出力:**

```json
[
  [ "めがねの", [ "メガネの", "眼鏡の", "めがねの", "meganeの", "Meganeの" ] ],
  [ "まち", [ "街", "待ち", "まち", "町", "待" ] ],
  [ "、", [ "、", "・", "，", ",", "､" ] ],
  [ "さばえ", [ "鯖江", "サバエ", "佐波江", "sabae", "Sabae" ] ]
]
```

## API

### `kana2kanji(text)`

- **`text`**: `string` - 変換するひらがなテキスト。
- **戻り値**: `Promise<Array<[string, string[]]>>` - セグメントの配列を解決するPromise。各セグメントは `[元のひらがなセグメント, 候補の配列]` のタプルです。

このライブラリはGoogleの公開されている変換エンドポイントを使用しています: `http://www.google.com/transliterate?langpair=ja-Hira|ja`

## 関連

- [kanji2kana](https://github.com/code4fukui/kanji2kana/) - 逆方向: 漢字をひらがなに変換します。

## ライセンス

MIT License
