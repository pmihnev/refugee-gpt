'use client';
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import Textarea from '@mui/joy/Textarea';
// import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { useEffect, useRef } from "react";

const Chat = () => {
    // const [inputValue, setInputValue] = useState('');
    const lastMessageRef = useRef<HTMLDivElement>(null);
    const { messages, input, handleInputChange, handleSubmit, error, reload } = useChat({
    api: '/api/chat'
  })

    useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
    // const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =

    // const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     // Handle form submission logic here
    //     console.log(inputValue)
    //     setInputValue(''); // Clear the input after submission
    // };
    console.log(error)

  return (
    <Box className="flex flex-col p-4 h-[100%]">
      <h1 className="text-2xl font-bold mb-4 text-center">Chat Component</h1>
      <Box className="flex-1 overflow-y-auto max-h-[65vh]">
        <Box className="text-left bg-gray-100 max-w-[640px] ml-auto mr-auto mt-2 mb-4 rounded-lg">
            <Box className="flex p-[12px] pl-[24px] pr-[24px] ">
                <Box className="flex flex-col items-center">
                    {/* <Typography className="pb-2" variant="body2">Refugee GPT</Typography> */}
                    <Box className="bg-black rounded-[50%] w-[40px] h-[40px]">
                        <img
                            src="/globe.svg"
                            alt="Logo"
                            className="h-10 w-10"
                        />
                    </Box>
                </Box>

                <Box className="pl-[40px] pr-[40px]">
                    Hello, how can I help you today?
                </Box>
            </Box>
        </Box>
        {messages.map((m, index) => {
            const isLast = index === messages.length - 1;
            return (
                <Box key={index} ref={isLast ? lastMessageRef : null} className="text-left bg-gray-100 max-w-[640px] ml-auto mr-auto mt-2 mb-4 rounded-lg">
                <Box className="flex p-[12px] pl-[24px] pr-[24px] ">
                    <Box className="flex flex-col items-center">
                        <Typography className="pb-2" variant="body2">{m.role === 'user' ? 'Me' : 'AI'}</Typography>
                        <Box className="bg-black rounded-[50%] w-[40px] h-[40px]">
                            <img
                                src="/globe.svg"
                                alt="Logo"
                                className="h-10 w-10"
                            />
                        </Box>
                    </Box>

                    <Box className="pl-[40px] pr-[40px]">
                        {m.content}
                    </Box>
                </Box>
            </Box>
                );
            })}
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 flex"
      >
        <Textarea value={input} onChange={handleInputChange} minRows={1} maxRows={4} className="w-full" name="Outlined" placeholder="Type in here…" variant="outlined" />
        <Button
          type="submit"
          variant="outlined"
          className="p-4 self-end"
        >
          Send
        </Button>
      </Box>
      <Snackbar open={Boolean(error)} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} className="mb-20">
        <Alert
            severity="error"
            action={
                <Button color="inherit" size="small" onClick={() => reload()}>
                    Retry
                </Button>
            }
        >
            An error occured.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Chat;