export default function Loader() {
  return (
    <div className="flex flex-col items-center mt-16 gap-y-6 text-[var(--color-medium)] text-sm">
      <style>
        {`
        @keyframes loader {
          20% {
            background-position: 0% 0%, 50% 50%, 100% 50%;
          }

          40% {
            background-position: 0% 100%, 50% 0%, 100% 50%;
          }

          60% {
            background-position: 0% 50%, 50% 100%, 100% 0%;
          }

          80% {
            background-position: 0% 50%, 50% 50%, 100% 100%;
          }
        }
        `}
      </style>
      <div className="loader w-16 h-8 bg-gray-700 animate-loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
