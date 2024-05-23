import { useEffect } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "../../utils/cn";
function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000); // 1000ms = 1s

      return () => clearInterval(id); // cleanup function
    },
    [dispatch]
  );

  return (
    <div
      className={cn(
        "float-left text-base md:text-lg mb-10 py-1 lg:py-2 px-4 md:px-6 rounded-lg ",
        buttonVariants({ variant: "outline" })
      )}
    >
      {mins < 10 ? "0" + mins : mins}:{seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
}

export default Timer;
