import { useState } from "react";
import { useEffect } from "react";

const HelloMessage = () => {
  const helloInDifferentLanguanges = [
    "Hola",
    "Здравствуйте",
    "こんにちは",
    "안녕하세요",
    "Bonjour",
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

  const [greetingSelection, setGreetingSelection] = useState([]);

  useEffect(() => {
    const randomSelectionOfGreetings = [];
    for (
      let i = randomSelectionOfGreetings.length;
      randomSelectionOfGreetings.length < 8;
      i++
    ) {
      const greeting =
        helloInDifferentLanguanges[
          Math.floor(Math.random() * helloInDifferentLanguanges.length)
        ];
      if (!randomSelectionOfGreetings.includes(greeting)) {
        randomSelectionOfGreetings.push(greeting);
      }
      console.log(randomSelectionOfGreetings);
    }
    setGreetingSelection(["Hi", ...randomSelectionOfGreetings, ":)"]);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 9) {
      return;
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 200);

    console.log(greetingSelection);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <h3>{greetingSelection[currentIndex]}</h3>
    </>
  );
};

export default HelloMessage;
