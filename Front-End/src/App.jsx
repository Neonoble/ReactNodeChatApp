import { useState } from "react";

import "./App.css";

import AuthPage from "./Auth/AuthPage";
import ChatsPage from "./Chat/ChatPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;