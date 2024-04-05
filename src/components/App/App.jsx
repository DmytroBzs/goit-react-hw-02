import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

import css from './App.module.css';

export default function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = JSON.parse(localStorage.getItem('currentReviews'));
    if (savedReviews !== null) {
      return savedReviews;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('currentReviews', JSON.stringify(reviews));
  }, [reviews]);

  function updateFeedback(feedbackType) {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1
    });
  }

  function reset() {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;

  const positiveReviews = totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options 
        clickFeedback={updateFeedback}
        clickReset={reset}
        reviews={reviews}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positive={positiveReviews}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
