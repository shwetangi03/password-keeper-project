import React, { useContext } from "react";
import ReactDOM from "react-dom";
import PasswordContext from "../store/password-context";

function PasswordModal({ onClose }) {
  const addPassword = useContext(PasswordContext);
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");

  const handleAddPassword = () => {
    addPassword(title, password);
    onClose();
    setTitle("");
    setPassword("");
  };

  return ReactDOM.createPortal(
    <div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAddPassword}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("overlays")
  );
}

export default PasswordModal;
