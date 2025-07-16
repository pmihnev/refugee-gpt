import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
  console.log('message', messages)
  console.log('API Key', process.env.OPENAI_API_KEY);

  // Get a language model
  const model = openai('gpt-4o')

  // Call the language model with the prompt
  const result = streamText({
    model,
    messages,
    onError({ error }) {
    console.error(error); // your error logging logic here
    },
  })
  console.log(result)

  // Respond with a streaming response
  return result.toDataStreamResponse({
    getErrorMessage: error => {
      if (error == null) {
        return 'unknown error';
      }

      if (typeof error === 'string') {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  })
}