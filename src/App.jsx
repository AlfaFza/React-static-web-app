import React from "react";

const App = () => {
  const title = "idle sambar";
  const HandleClick = () => {
    window.alert("Click");
  };

  return (
    <div onClick={HandleClick}>
      <h1>Welcome to React!</h1>
      <button
         className="appearance-none focus:outline-none block m-auto p-2 rounded-md border border-red-700 bg-blue-700 text-white hover:bg-opacity-0 duration-200"
        onClick={(e) => {
          e.stopPropagation();
          HandleClick();
        }}
      >
        Click me
      </button>
      <p>
        This is a simple React application. Food to eat now: {title} at{" "}
        {new Date().toLocaleString()}
      </p>
      <h1 className="text-3xl text font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};

export default App;
