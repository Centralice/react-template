import s from "./Options.module.css";

const Options = ({ updateFeedback, reset, totalFeedback }) => {
  return (
    <div className={s.center}>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
