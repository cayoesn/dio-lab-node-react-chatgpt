import { useState } from "react";
import "./styles/App.css";
import "./styles/reset.css";
import { makeRequest } from "./api/api";

import { SideMenu } from "./components/SideMenu/SideMenu";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";

function App() {
  const [input, setInput] = useState('');
  const [chatlog, setChatlog] = useState([
    {
      user: "gpt",
      message: "Olá, eu sou o GPT. Como posso ajudar?",
    },
  ]);

  async function handleSubmit(event) {
    event.preventDefault();
    const inputMessage = input;
    setInput("");

    let response = await makeRequest({ prompt: inputMessage });
    response = response.data.split("\n").map((line, index) => <p key={index}>{line}</p>);

    setChatlog([
      ...chatlog,
      { user: "me", message: `${inputMessage}` },
      { user: "gpt", message: response },
    ]);
  }

  return (
    <div className="App">
      <SideMenu />
      <section className="chatbox">
        <div className="chat-log">
          {chatlog.map((message, index) => (
            <ChatMessage key={index} messageId={index} message={message} />
          ))}
        </div>

        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              className="chat-input-textarea"
              placeholder="Digite uma mensagem"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
