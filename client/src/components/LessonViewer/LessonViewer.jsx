import React, { useState } from 'react';
import { sendPrompt } from '../../API/PromptAPI';
import CategoryForm from '../CategoryForm/CategoryForm';
import { ProgressSpinner } from 'primereact/progressspinner';
import { InputText } from 'primereact/inputtext';
import './LessonViewer.css';
import { useSelector } from 'react-redux';

const LOGO = (
  <div className="lesson-logo-fixed">
    <svg width="60" height="60" viewBox="0 0 60 60">
      <circle cx="30" cy="30" r="28" fill="#00bcd4" stroke="#fff" strokeWidth="3" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fill="#fff"
        fontSize="28"
        fontFamily="Segoe UI"
        dy=".3em"
      >
        AI
      </text>
    </svg>
    <span className="lesson-logo-title">AI Learning</span>
  </div>
);

const LessonViewer = () => {
  const [lesson, setLesson] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetPrompt, setResetPrompt] = useState(false);
  const [error, setError] = useState('');
  const [topic, setTopic] = useState('');
  const userId = useSelector((state) => state.user.id) || 1;

  const handlePromptSubmit = async ({ categoryId, subCategoryId }) => {
    setLoading(true);
    setLesson('');
    setError('');

    try {
      const response = await sendPrompt({
        userId,
        categoryId,
        subCategoryId,
        prompt: topic,
      });
      setLesson(response.data);
      setResetPrompt(true);
    } catch (error) {
      setError('אירעה שגיאה. נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setLesson('');
    setResetPrompt(false);
    setError('');
    setTopic('');
  };

  return (
    <div style={{ position: 'relative' }}>
      {LOGO}
      <div className="lesson-viewer">
        {!lesson && (
          <div className="lesson-form-area">
            <h2 className="lesson-title">בחר נושא לימוד</h2>
            <CategoryForm onSubmit={handlePromptSubmit} resetPrompt={resetPrompt} />
            {error && <div style={{ color: 'red', marginTop: 16 }}>{error}</div>}
          </div>
        )}

        <div className="lesson-output-area">
          {loading && (
            <div className="spinner-container">
              <ProgressSpinner />
              <p>יוצר שיעור... אנא המתן 🙂</p>
            </div>
          )}
          {lesson && !loading && (
            <div className="lesson-result">
              <button className="back-btn" onClick={handleBack}>
                ← חזרה לנושא אחר
              </button>
              <h3>שיעור שנוצר עבורך:</h3>
              <div className="lesson-text">{lesson}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;
