function decrypt(encryptedText, key, alphabet) {
  let decryptedText = "";
  let encryptedTextSymbolNumber;
  let keySymbolNumber;
  let decryptedTextSymbolNumber;

  for (let i = 0; i < encryptedText.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (encryptedText[i] === alphabet[j]) {
        encryptedTextSymbolNumber = j;
        break;
      }
    }

    for (let j = 0; j < alphabet.length; j++) {
      if (key[i % key.length] === alphabet[j]) {
        keySymbolNumber = j;
        break;
      }
    }

    decryptedTextSymbolNumber =
      (alphabet.length + encryptedTextSymbolNumber - keySymbolNumber) %
      alphabet.length;

    decryptedText += alphabet[decryptedTextSymbolNumber];
  }

  return decryptedText;
}

module.exports = decrypt;
