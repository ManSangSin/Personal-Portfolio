import { useState } from "react";
import { useEffect } from "react";

const HelloMessage = () => {
  const helloInDifferentLanguanges = [
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

  const greetingSelection = ["Hello", ":)"];

  function randomGreeting() {
    return helloInDifferentLanguanges[
      Math.floor(Math.random() * helloInDifferentLanguanges.length)
    ];
  }

  function generateArrayOfRandomGreetings() {
    while (greetingSelection.length < 10) {
      const greeting = randomGreeting();
      if (!greetingSelection.includes(greeting)) {
        greetingSelection.splice(1, 0, greeting);
      }
    }
  }

  generateArrayOfRandomGreetings();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === greetingSelection.length - 1) {
      return;
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 200);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div>{greetingSelection[currentIndex]}</div>
    </>
  );
};

export default HelloMessage;
