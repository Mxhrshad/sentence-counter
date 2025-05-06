export default function Output({ paragraph }) {

    const countSentences = (text) => {
        if (!text) return 0;
    
        const detectLanguage = (text) => {
            const faSigns = /[آ-ی]/;
            const enSigns = /[a-zA-Z]/;
    
            if (faSigns.test(text)) {
                return "fa";
            } else if (enSigns.test(text)) {
                return "en";
            } else {
                return "en";
            }
        };
    
        const abbreviations = {
            fa: [
                "آقای\\.", "خانم\\.", "دکتر\\.", "مثلاً\\.", "جناب\\.", "استاد\\."
            ],
            en: [
                "Mr\\.", "Mrs\\.", "Dr\\.", "etc\\.", "e\\.g\\.", "i\\.e\\."
            ]
        };
    

        const language = detectLanguage(text);
    

        const langAbbreviations = abbreviations[language] || [];
        const abbreviationRegex = new RegExp(`(?:${langAbbreviations.join('|')})(\\s|$)`, "gi");
    

        const cleanedText = text.replace(abbreviationRegex, "");
    

        const sentenceRegex = /[.!؟!?]+(\s|$)/g;
    

        const matches = cleanedText.match(sentenceRegex);
    
        return matches ? matches.length : 0;
    };
    
    

    const sentenceCount = countSentences(paragraph);

    return (
        <div className="mt-8 bg-white shadow-lg rounded-xl p-6 w-96 text-center">
            <h2 className="font-bold text-2xl text-amber-500 mb-4">Results</h2>
                <p className="text-gray-700 flex flex-col gap-3">
                    <strong>Paragraph:</strong> {paragraph || "No text provided"}
                </p>
            <p className="text-gray-700 mt-4">
                <strong>Sentence Count:</strong> {sentenceCount}
            </p>
        </div>
    );
}
