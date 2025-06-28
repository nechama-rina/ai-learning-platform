import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PromptHistoryPage.css';

const PromptHistoryPage = () => {
  const [prompts, setPrompts] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!user?.id) {
      setPrompts([]);
      return;
    }

    const endpoint = user.isAdmin
      ? '/api/Prompt/history/1'
      : `/api/Prompt/history/${user.id}`;

    axios
      .get(endpoint)
      .then((res) => setPrompts(res.data))
      .catch(() => setPrompts([]));
  }, []);

  const handleBackToList = () => setSelectedPrompt(null);

  return (
    <div className="prompt-history-container">
      {}
      <div className="sidebar">
        <h3>Prompt History</h3>
        {prompts.length === 0 ? (
          <p className="no-prompts">No prompts to display</p>
        ) : (
          prompts.map((p, i) => (
            <div
              key={i}
              onClick={() => setSelectedPrompt(p)}
              className={`history-item ${selectedPrompt === p ? 'selected' : ''}`}
            >
              <strong>{p.categoryName} - {p.subCategoryName}</strong>
              <p>{p.prompt?.substring(0, 40) || '(No prompt found)'}</p>
              {user?.isAdmin && <small>By: {p.userName}</small>}
            </div>
          ))
        )}
      </div>

      {}
      <div className="details">
        {selectedPrompt ? (
          <>
            <button onClick={handleBackToList} style={{ marginBottom: '1rem' }}>Back to list</button>
            <h2>Prompt</h2>
            <p>{selectedPrompt.prompt}</p>
            <h2>Response</h2>
            <p>{selectedPrompt.response}</p>
            <small>{new Date(selectedPrompt.createdAt).toLocaleString()}</small>
          </>
        ) : (
          <p className="no-prompts">Select a prompt from the history to view details</p>
        )}
      </div>
    </div>
  );
};

export default PromptHistoryPage;
