"use client";
// This code is a React component that allows users to add new users to a list.

import React, { useState, FormEvent } from "react";
import "./form-5.scss"; // Assuming you have some styles in this file
import Button from "../../global/buttons/button"; // Importing a custom button component

type User = {
  id: number;
  name: string;
  age: number;
};

const AddUser3: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json(); // <-- This line parses the response as JSON
    setUsers(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: Number(age) }),
    });
    const data = await res.json();
    setMessage(data.message);
    setName("");
    setAge("");
    fetchUsers();
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="form-3-div1">
      <form className="form-3-form" onSubmit={handleSubmit}>
        <div className="form-3-divform">
          <input
            className="input-defult"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            className="input-defult"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            type="number"
            required
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
        <div>{message && <p>{message}</p>}</div>
      </form>

      <div className="form-3-div2">
        <h3>لیست کاربرها:</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddUser3;
