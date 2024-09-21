const fs = require("fs");
const encrypt = require("./functions/encrypt.js");
const decrypt = require("./functions/decrypt.js");

function main() {
  let text;
  let key;
  let encryptedText;
  let decryptedText;
  let alphabet =
    "АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯя";

  // Ініціалізація з файлів
  try {
    key = fs.readFileSync("./key.txt", "utf8");
    console.log("key.txt:\n", key);
  } catch (error) {
    console.error(error);
  }
  try {
    text = fs.readFileSync("./text.txt", "utf8");
    console.log("text.txt:\n", text);
  } catch (error) {
    console.error(error);
  }

  // Шифрування
  try {
    fs.writeFileSync("./encryptedText.txt", encrypt(text, key, alphabet));
  } catch (error) {
    console.error(error);
  }
  try {
    encryptedText = fs.readFileSync("./encryptedText.txt", "utf8");
    console.log("encryptedText.txt:\n", encryptedText);
  } catch (error) {
    console.error(error);
  }

  // Дешифрування
  try {
    fs.writeFileSync(
      "./decryptedText.txt",
      decrypt(encryptedText, key, alphabet)
    );
  } catch (error) {
    console.error(error);
  }
  try {
    decryptedText = fs.readFileSync("./decryptedText.txt", "utf8");
    console.log("decryptedText.txt:\n", decryptedText);
  } catch (error) {
    console.error(error);
  }
}

main();
