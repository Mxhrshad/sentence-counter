import { useState } from "react";
import Input from "../components/input";
import Output from "../components/output";

export default function Home() {
    const [paragraph, setParagraph] = useState("");

    return (
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <Input onSentenceChange={setParagraph} />
            <Output paragraph={paragraph} />
        </div>
    )

}