import { useQuiz } from "./contextes/QuizContext";

function StartScreen() {
  const { numQuestion, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React quiz!</h2>
      <h3>{numQuestion} question to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
