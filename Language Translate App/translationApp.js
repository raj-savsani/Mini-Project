async function parrot() {
    let input = document.getElementById("input").value;
    let from_lang = document.getElementById("from").value;
    let to_lang = document.getElementById("to").value;
    let output = document.getElementById("output");

    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: `${input}`,
        source: `${from_lang}`,
        target: `${to_lang}`,
      }),
      headers: { "Content-Type": "application/json" },
    });

    let data = await res.json();
    output.textContent = data.translatedText;
  }