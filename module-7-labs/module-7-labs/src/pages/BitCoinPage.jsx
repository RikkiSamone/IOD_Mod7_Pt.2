import React, { useContext }  from "react"
import BitcoinRates from "../components/Bitcoin/bitCoinRates"
import { EmojiContext } from "../context/emojiContext";

function BitCoinPage() {
    const { mood, Cry } = useContext(EmojiContext);
    return (
        <div>
            <h1> BitCoin Exchange Rates </h1>
            <p>Current Mood: {mood}</p> {/* Display the current mood */}
            <button onClick={Cry}>Change Mood</button> {/* Change mood */}
            <BitcoinRates /> {/* Your existing BitcoinRates component */}
    </div>
       
    );
}

export default BitCoinPage;