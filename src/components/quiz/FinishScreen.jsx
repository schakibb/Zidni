import NextButton from "./NextButton";

function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
  status,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage >= 0) emoji = "👎";
  if (percentage >= 20) emoji = "👀";
  if (percentage >= 40) emoji = "🏅";
  if (percentage >= 60) emoji = "🥉";
  if (percentage >= 80) emoji = "🥈";
  if (percentage === 100) emoji = "🥇";

  return (
    <div className="text-center">
      <p className="bg-blue-500 text-white rounded-full text-xl md:text-2xl py-4 px-5 mb-6">
        <span className="text-lg md:text-xl mr-1">{emoji}</span> You scored{" "}
        <strong>{points}</strong> out of {maxPossiblePoints} ({" "}
        {Math.ceil(percentage)} % )
      </p>
      <p className="text-xl md:text-2xl mb-12">
        ( Highscore: {highscore} points )
      </p>
      <button
        className="block font-semibold text-xl md:text-2xl border-2 border-gray-700 bg-gray-700 py-3 md:py-4 px-8 md:px-10 cursor-pointer rounded-full transition duration-300 hover:bg-gray-600 disabled mx-auto"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
