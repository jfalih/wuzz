import { chat } from '@api/chat';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { ChatMessageV2, ChatResponse } from 'cohere-ai/api';

export const useChatCohere = () : UseMutationResult<ChatResponse, Error, ChatMessageV2[]> => {
    return useMutation<ChatResponse, Error, ChatMessageV2[]>({
        mutationFn: (messages: ChatMessageV2[]) => chat(messages),
    });
};
