import React, { useContext } from "react";
import { EmojiContext} from "../../context/emojiContext";

function MoodDisplay() {
  const { mood } = useContext(EmojiContext);

  return <div className="componentBox">
    <h2>The mood is: {mood}</h2>
  </div>;
}

export default MoodDisplay;