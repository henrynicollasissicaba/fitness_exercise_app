import { useContext } from "react";
import { ChatMessageContext } from "../contexts/ChatMessageContext";

export const useChatMessages = () => {
  return useContext(ChatMessageContext);
};
