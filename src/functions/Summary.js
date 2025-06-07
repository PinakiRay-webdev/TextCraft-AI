import { GoogleGenAI } from "@google/genai";

// const api_key = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: 'AIzaSyD3zc4ljExAj6QhaCw3v_VYMYPbEf8eIp0' });

export const createSummary = async (paragraph) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Observe the ${paragraph} thoroughly and prepare professional summary from it. Do not use any special characters. Do not include any code samples.`,
  });

  return response.text;
};

