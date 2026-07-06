import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if the input is empty
    if (!username.trim()) {
      alert("Please enter a username first!");
      return;
    }

    // 1. Check which UI was used last from localStorage
    const lastUI = localStorage.getItem('lastRoutedUI');
    let targetURL = '';

    // 2. Evenly split: Alternates between Minimal and Complex
    if (lastUI === 'minimal') {
      targetURL = 'https://pasindunuone1.github.io/Complex_UI/';
      localStorage.setItem('lastRoutedUI', 'complex');
    } else {
      // Defaults to minimal on the very first try, or if last was complex
      targetURL = 'https://pasindunuone1.github.io/Minimal_UI/';
      localStorage.setItem('lastRoutedUI', 'minimal');
    }

    // 3. Safe-encode the username and append it as a query parameter (?username=...)
    const finalURL = `${targetURL}?username=${encodeURIComponent(username.trim())}`;

    // 4. Redirect the user to the target external page
    window.location.href = finalURL;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to the Router Portal</h2>
        <p style={styles.subtext}>Enter your username to proceed to your assigned interface.</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Launch UI
          </button>
        </form>
      </div>
    </div>
  );
}

// Simple inline styles to make it look clean
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f4f6f9',
    margin: 0,
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    color: '#333',
    marginBottom: '0.5rem',
  },
  subtext: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default App;