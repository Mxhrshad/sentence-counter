import { useState } from "react";

export default function Input({ onSentenceChange }) {
    const [sentence, setSentence] = useState("");

    const handleChange = (e) => {
        const newSentence = e.target.value;
        setSentence(newSentence);
        onSentenceChange(newSentence);
    };

    return (
        <div className="w-full h-1/2 flex justify-center items-center flex-col">
            <h1 className="font-bold text-5xl mb-5">Sentence Counter</h1>
            <p className="font-semibold">Type your sentence</p>
            <input
                className="bg-white text-gray-800 border border-amber-300 rounded-full px-6 py-3 mt-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400 transition duration-300 w-80 placeholder-gray-400 text-center"
                type="text"
                name="sentence"
                id="sentence"
                placeholder="Start typing..."
                value={sentence}
                onChange={handleChange}
            />
        </div>
    );
}