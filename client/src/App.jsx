import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './components/MainPage';
import OurServices from './components/OurServices';
import About from './components/About';
import Contacts from './components/Contacts';
import AdminPanel from './adminca/AdminPanel';
import AdminLog from './components/AdminLog';
import { useEffect, useState } from "react";

export default function App() {




  return (
    <>


      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin.3fewrc432fd.240edw9cidj32d23dxw.s" element={<AdminPanel />} />
        <Route path='/admin' element={<AdminLog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
