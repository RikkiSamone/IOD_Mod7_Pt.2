import React, { createContext, useState } from "react";

export const EmojiContext = createContext();

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("😁");

  // Function to change the mood
  const Cry = () => {
    let newMood = "😩";
    if (mood === "😩") newMood = "😭";
    else if (mood === "😭") newMood = "🤯";

    setMood(newMood);
  };

  return (
    <EmojiContext.Provider value={{ mood, setMood, Cry }}>
      {children}
    </EmojiContext.Provider>
  );
}