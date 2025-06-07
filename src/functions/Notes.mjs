import { GoogleGenAI } from "@google/genai";

// const api_key = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: 'AIzaSyD3zc4ljExAj6QhaCw3v_VYMYPbEf8eIp0' });

export const createNotes = async (paragraph) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Observe the ${paragraph} thoroughly and prepare professional notes from it. Do not use any special characters. Do not include any code samples. Format the notes using HTML tags like <strong> for the point and <p> for its description. DO NOT WRAP INSIDE THE <HTML></HTML>. USE <BODY><BODY/> ONLY AND DO NOT USE ANY BACKTICKS`,
  });

  return response.text;
};

