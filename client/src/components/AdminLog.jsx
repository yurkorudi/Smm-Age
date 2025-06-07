import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLog = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
      });

      const data = await response.json();

      if (data.success) {
        navigate('/admin.3fewrc432fd.240edw9cidj32d23dxw.s');
      } else {
        setError(data.message || 'Невірний логін або пароль');
      }
    } catch (err) {
      setError('Помилка з’єднання з сервером');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="login" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Логін
        </label>
        <input
          type="text"
          id="login"
          name="login"
          placeholder="Введіть логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Введіть пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Підтвердити
      </button>
    </div>
  );
};

export default AdminLog;
