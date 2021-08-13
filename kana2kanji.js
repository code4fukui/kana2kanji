const endpoint = "http://www.google.com/transliterate";

const kana2kanji = async (s) => {
  const res = await (await fetch(endpoint + "?langpair=ja-Hira|ja&text=" + encodeURIComponent(s))).json();
  console.log(res);
  return res;
};

export { kana2kanji };
