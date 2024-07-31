import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";
import { useState, useEffect } from "react";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("savedFeedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
})

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const reset = () => {
    setFeedback({
    good: 0,
    neutral: 0,
    bad: 0,
  })
  };

  useEffect(() => {
    window.localStorage.setItem("savedFeedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={reset}
        totalFeedback={totalFeedback}
      />

      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
