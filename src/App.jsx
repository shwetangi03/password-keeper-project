import React from "react";
import "./App.css";
import PasswordProvider from "./store/PasswordProvider";
import PasswordManager from "./components/PasswordManager";

const App = () => {
  function App() {
    return (
      <PasswordProvider>
        <div>
          <PasswordManager />
        </div>
      </PasswordProvider>
    );
  }
};

export default App;
