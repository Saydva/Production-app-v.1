import {create} from 'zustand';
import { Message } from "../myTypes"

export const initMessage: Message = {
  type: 'info', 
    message: 'Welcome to the application!',
}

type MessageStoreType = {
    message: Message;
    setMessage: (newMessage: Message) => void;
    clearMessage: () => void;
    };

export const useMessageStore = create<MessageStoreType >((set)=>({
    message: initMessage,
    setMessage: (newMessage) => set(() => ({ message: newMessage })),
    clearMessage: () => set(() => ({ message: initMessage   })),
}));        
    
