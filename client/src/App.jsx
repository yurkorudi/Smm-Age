import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import OurServices from './components/OurServices';
import About from './components/About';
import Contacts from './components/Contacts';
import AdminPanel from './adminca/AdminPanel';
import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:5000/api/hello");
    console.log(response.data.massage);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      {/* Цей текст прийшов із Flask */}
      {message && (
        <div
          style={{
            padding: '10px',
            background: '#dff0d8',
            borderBottom: '1px solid #ccc',
            textAlign: 'center',
          }}
        >
          {message}
        </div>
      )}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
