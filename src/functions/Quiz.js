import { GoogleGenAI } from "@google/genai";

// Your Gemini API key setup
const ai = new GoogleGenAI({
  apiKey: "AIzaSyD3zc4ljExAj6QhaCw3v_VYMYPbEf8eIp0",
});

export const generateQuiz = async (paragraph) => {
  const prompt = `
Based on the following paragraph, generate exactly 5 MCQs.
Each question should have:
- A "question" string
- An "options" array of 4 strings
- An "answer" string (the correct one)

Respond strictly in pure JSON format like this:

[
  {
    "question": "Sample question?",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  },
  ...
]

Paragraph:
${paragraph}
  `;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const text = result.text;
    console.log(text)

    const start = text.indexOf("[");
    const end = text.lastIndexOf("]") + 1;
    const jsonString = text.slice(start, end);

    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw new Error("Quiz generation failed.");
  }
};
