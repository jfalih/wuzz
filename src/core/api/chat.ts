import { CohereClientV2 } from 'cohere-ai';
import { ChatMessageV2 } from 'cohere-ai/api';

// Initialize Cohere client
const cohere = new CohereClientV2({
  token: '4B9t4FQSrvhHaOva3kJiquhXUR4SxaKWDFX6ILVD',
});

// Function to fetch data from Cohere API
export const chat = async (messages: ChatMessageV2[]) => {
  const response = await cohere.chat({
    model: 'command-r-plus',
    temperature: 0.5,
    messages: [
      {
        role: 'system',
        content: 'You are a Language Model created by Tobby AI. Be helpful and concise, providing clear and useful information. Limit responses to a maximum of 1000 characters.',
      },
      {
        role: 'system',
        content: 'You are a support assistant helping users quit vaping and smoking. Provide gradual nicotine reduction tips and personalized advice to help them overcome their addiction in a healthy way.',
      },
      ...messages,
    ],
  });

  return response;
};
