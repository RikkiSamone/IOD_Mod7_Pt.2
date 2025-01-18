import React, { useContext } from "react";
import { EmojiContext } from "../../context/emojiContext";

function MoodChanger() {
  const { mood, Cry } = useContext(EmojiContext);

  return (
    <div className="MoodChanger componentBox">
          <h3>Current Mood: {mood}</h3> 
      <button onClick={Cry}>Change</button>
    </div>
  );
}

export default MoodChanger;