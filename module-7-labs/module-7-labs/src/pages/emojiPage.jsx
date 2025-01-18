import React from "react"
import MoodDisplay from "../components/EmojiDisplay/emojidisplay"
import MoodChanger from "../components/Emoji/emoji";
import { MoodProvider } from "../context/emojiContext";


function EmojiPage() {
    return (
     <div>
            <h1> Emoji Mood Displayer </h1>
            <MoodProvider>
            <MoodDisplay></MoodDisplay>
            <MoodChanger></MoodChanger>
            </MoodProvider>
        </div>
    );
}

export default EmojiPage;