const HelloMessage = () => {
  const differentWaysToSayHello = [
    "Hello",
    "Hola",
    "Здравствуйте",
    "こんにちは",
    "안녕하세요",
    "Bonjour",
    "Hallo",
    "Ciao",
    "你好",
    "Olá",
    "مرحبًا",
    "Здравей",
    "হ্যালো।",
    "Dobrý den",
    "Hej",
    "Καλημέρα",
    "سلام",
    "Hei",
    "שלום",
    "नमस्ते।",
    "Bok",
    "Jó napot",
    "Halo",
    "Salve",
    "Laba diena",
    "Sveiks",
    "Dzień dobry",
    "Bună",
    "Ahoj",
    "Hej",
    "สวัสดี",
    "Merhaba",
    "Вітаю",
    "Chào chị",
  ];

  const randomGreeting =
    differentWaysToSayHello[
      Math.floor(Math.random() * differentWaysToSayHello.length)
    ];
  return (
    <>
      <div>{randomGreeting}</div>
    </>
  );
};

export default HelloMessage;
