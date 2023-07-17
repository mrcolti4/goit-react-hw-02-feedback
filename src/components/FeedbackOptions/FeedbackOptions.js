import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.category__list}>
      {Object.values(options).map((category, index) => {
        return (
          <li>
            <button
              className={css.button}
              key={index}
              onClick={onLeaveFeedback}
              type="button"
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
