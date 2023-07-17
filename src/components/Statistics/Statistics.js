export const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(feedback).map((key, index) => {
        return (
          <p key={index}>
            {key}: {feedback[key]}
          </p>
        );
      })}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage(total, feedback.good)}%</p>
    </>
  );
};
