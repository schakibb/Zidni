import React from "react";

function AlgorithmComponent({
  title,
  placeholder,
  inputValue,
  onInputChange,
  buttonText,
  onButtonClick,
  outputLabel,
  outputValue,
  graphContainerId,
}) {
  return (
    <div className=" my-3">
      <h4 className="font-bold">{title}</h4>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
      <p>
        {outputLabel}: <span className="output">{outputValue}</span>
      </p>
      <div
        id={graphContainerId}
        className="m-2 h-96 border rounded shadow-inner"
      ></div>
    </div>
  );
}

export default AlgorithmComponent;
