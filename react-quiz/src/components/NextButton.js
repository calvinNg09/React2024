import { useQuiz } from "./contextes/QuizContext";

function NextButton() {
  const { dispatch, answer, numQuestion, index } = useQuiz();
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
