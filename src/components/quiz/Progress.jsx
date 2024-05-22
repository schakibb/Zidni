function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="mb-4 grid grid-cols-2 gap-4 text-1xl">
      <style>
        {`
          progress {
            -webkit-appearance: none;
            width: 100%;
            height: 1vw;
            grid-column: 1 / -1;
          }

          progress::-webkit-progress-bar {
            background-color: #ced4da;
            border-radius: 100px;
          }

          progress::-webkit-progress-value {
            background-color: #1098ad;
            border-radius: 100px;
          }
        `}
      </style>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
        className="w-full col-span-full"
      >
        <div className="h-full rounded-full bg-theme"></div>
      </progress>
      <div className="text-left">
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
      </div>
      <div className="text-right">
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </div>
    </header>
  );
}

export default Progress;
