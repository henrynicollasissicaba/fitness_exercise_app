import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatMessage({ content, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-3xl rounded-lg p-3 ${
          isUser ? "bg-primary-700 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // ISSO É ESSENCIAL!
          components={{
            // Parágrafos
            p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,

            // Listas não ordenadas
            ul: ({ children }) => (
              <ul className="list-disc ml-6 mb-3 space-y-1">{children}</ul>
            ),

            // Listas ordenadas
            ol: ({ children }) => (
              <ol className="list-decimal ml-6 mb-3 space-y-1">{children}</ol>
            ),

            // Itens de lista
            li: ({ children }) => <li className="ml-1">{children}</li>,

            // Quebras de linha
            br: () => <br className="my-1" />,

            // Títulos
            h1: ({ children }) => (
              <h1 className="text-2xl font-bold mb-3 mt-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-bold mb-2 mt-3">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold mb-2 mt-2">{children}</h3>
            ),

            // Blockquote
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-400 pl-4 italic my-3">
                {children}
              </blockquote>
            ),

            // Links
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
