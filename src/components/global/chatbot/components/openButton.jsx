function openButton({ isWaiting, setIsOpen }) {
  return (
    <button
      className="z-[100]  inline-flex items-center justify-center text-sm disabled:pointer-events-none disabled:opacity-80 border border-[#A3A3A3] rounded-full bg-[#020817] 
      w-12 h-12  hover:bg-gray-900 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case
       leading-5 "
      onClick={setIsOpen}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="40"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white block border-gray-200 align-middle"
      >
        <path
          d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
          className="border-gray-200"
        ></path>
      </svg>
    </button>
  );
}

export default openButton;
