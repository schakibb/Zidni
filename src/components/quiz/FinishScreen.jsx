import { Button } from "../ui/button";
function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage >= 0) emoji = "😓";
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
      <Button
        size="lg"
        className="mr-4"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </Button>
      <Button
        size="lg"
        className="ml-4"
        onClick={() => dispatch({ type: "restart" })}
      >
        Next course
      </Button>
    </div>
  );
}

export default FinishScreen;
