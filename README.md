# kana2kanji

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, zero-dependency JavaScript module for converting Japanese hiragana to kanji using the [Google Japanese Input CGI API](https://www.google.co.jp/ime/cgiapi.html).

## Features

-   Converts hiragana text into multiple kanji, katakana, and romaji candidates.
-   Automatically segments input text, providing suggestions for each part.
-   Works directly in modern browsers and Deno via ES module import.

## Usage

Import the `kana2kanji` function and call it with a hiragana string. The function returns a promise that resolves to an array of segments, where each segment contains the original hiragana part and a list of conversion candidates.

```js
import { kana2kanji } from "https://code4fukui.github.io/kana2kanji/kana2kanji.js";

const text = "めがねのまち、さばえ";
const result = await kana2kanji(text);

console.log(result);
```

**Output:**

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

-   **`text`**: `string` - The hiragana text to be converted.
-   **Returns**: `Promise<Array<[string, string[]]>>` - A promise that resolves to an array of segments. Each segment is a tuple `[original_hiragana_segment, candidates_array]`.

This library uses Google's public transliteration endpoint: `http://www.google.com/transliterate?langpair=ja-Hira|ja`

## Related

-   [kanji2kana](https://github.com/code4fukui/kanji2kana/) - The reverse: converts kanji to hiragana.

## License

MIT License