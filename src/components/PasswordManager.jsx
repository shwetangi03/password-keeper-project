import React, { useState, useContext } from "react";
import PasswordModal from "./PasswordModel";
import PasswordContext from "../store/password-context";

const PasswordManager = () => {
    const passwordCtx = useContext(PasswordContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const deletePassword = (index)=>{
    passwordCtx.removeItem(index)
  }
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredPasswords = passwords.filter((password) =>
    password.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Password Keeper</h1>
      <button onClick={openModal}>Add New Password</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPasswords.map((password, index) => (
          <li key={index}>
            <span>
              {password.title} - {password.password}
            </span>
            <button>Edit</button>
            <button onClick={() => deletePassword(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {isModalOpen && <PasswordModal onClose={closeModal} />}
      <h4>All Passwords</h4>
    </div>
  );
};

export default PasswordManager;
