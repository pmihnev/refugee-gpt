import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  index?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  message?: any;
  isLast?: boolean;
  lastMessageRef?: React.RefObject<HTMLDivElement> | null;
}

const ChatMessage: React.FC<Props> = ({ index, message, isLast, lastMessageRef }) => {
  return (
    <Box
      key={index}
      ref={isLast ? lastMessageRef : null}
      className="text-left bg-gray-100 max-w-[640px] ml-auto mr-auto mt-2 mb-4 rounded-lg"
    >
      <Box className="flex p-[12px] pl-[24px] pr-[24px]">
        <Box className="flex flex-col items-center">
          <Typography className="pb-2" variant="body2">
            {message.role === 'user' ? 'Me' : 'AI'}
          </Typography>
          <Box className="bg-black rounded-[50%] w-[40px] h-[40px]">
            <img src="/globe.svg" alt="Logo" className="h-10 w-10" />
          </Box>
        </Box>

        <Box className="pl-[40px] pr-[40px]">{message.content}</Box>
      </Box>
    </Box>
  );
};

export default ChatMessage;