function openButton({ isWaiting, setIsOpen }) {
  return (
    <button
      className="z-[100]  inline-flex items-center justify-center text-sm disabled:pointer-events-none disabled:opacity-80 border border-[#A3A3A3] rounded-tl-lg rounded-tr-lg rounded-br-none rounded-bl-lg bg-[#020817] 
      w-16 h-16  hover:bg-gray-900 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case
       leading-5 dark:bg-[#f7f7f7] dark:hover:bg-gray-300 dark:border-[#A3A3A3]"
      onClick={setIsOpen}
    >
      <img
        src={isWaiting ? "/chatbot/waiting.svg" : "/chatbot/normal.svg"}
        alt="robot"
      />
    </button>
  );
}

export default openButton;
