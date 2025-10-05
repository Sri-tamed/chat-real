import { useState, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatPanelProps {
  socket: any;
  roomId: string;
  username: string;
}

export default function ChatPanel({ socket, roomId, username }: ChatPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (data: { sender: string; text: string }) => {
      setMessages((prev) => [...prev, data]);
    };

    socket.on("chat-message", handleMessage);
    return () => socket.off("chat-message", handleMessage);
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMsg = { sender: username, text: message.trim() };
    socket.emit("chat-message", { ...newMsg, roomId });
    setMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <MessageCircle size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 bg-gray-900 text-white shadow-lg flex flex-col z-40"
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
              <h2 className="font-semibold text-lg">Chat</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[70%] ${
                    msg.sender === username ? "bg-blue-600 ml-auto" : "bg-gray-700"
                  }`}
                >
                  <p className="text-sm font-semibold">{msg.sender}</p>
                  <p className="text-sm">{msg.text}</p>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-gray-700 flex">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-blue-600 px-3 rounded-lg hover:bg-blue-500 transition"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
