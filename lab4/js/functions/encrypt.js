function encrypt(text, key, alphabet) {
  let encryptedText = "";
  let textSymbolNumber;
  let keySymbolNumber;
  let encryptedTextSymbolNumber;

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (text[i] === alphabet[j]) {
        textSymbolNumber = j;
        break;
      }
    }

    for (let j = 0; j < alphabet.length; j++) {
      if (key[i % key.length] === alphabet[j]) {
        keySymbolNumber = j;
        break;
      }
    }

    encryptedTextSymbolNumber =
      (textSymbolNumber + keySymbolNumber) % alphabet.length;

    encryptedText += alphabet[encryptedTextSymbolNumber];
  }

  return encryptedText;
}

module.exports = encrypt;
