import s from "./Feedback.module.css";

const Feedback = ({ feedback, positiveFeedback }) => {
  return (
    <div className={s.center}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>{positiveFeedback}% of our customers are perfectly happy!</p>
    </div>
  );
};

export default Feedback;
