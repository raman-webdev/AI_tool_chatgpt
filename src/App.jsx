import React, { useState } from "react";
import { URL } from "./constant";
import Answer from "./components/Answer";

const App = () => {
  const [ question, setQuestion] = useState("");
  const [result, setResult] = useState(["Hey Users! Ask me anything."]);

  const payload = {
    contents: [
      {
        parts: [
          {
            text: question,
          },
        ],
      },
    ],
  };
  const askQuestin = async () => {
    let response = await fetch(
      URL + "AIzaSyBAC8-Y_UgVjyi5SeaUW_jkje7Iafbhrfw",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    response = await response.json();

    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim());
    console.log(dataString);
    // console.log(response.candidates[0].content.parts[0].text);
    setResult(dataString);
  };
  return (
    <>
      <div className="grid grid-cols-5 text-white text-center h-screen">
        {/* left-section */}
        <div className="col-span-1 py-10 bg-zinc-800">
          <p>Hello</p>
        </div>

        {/* right-section */}
        <div className="col-span-4 p-10  ">
          <div className="container h-[550px] py-10 overflow-auto ">
            {/* {result} */}
            {result &&
              result.map((item, index) => <Answer ans={item} keys={index} />)}
          </div>
          <div className="bg-zinc-800-700 border-2 rounded-2xl border-zinc-700 w-1/2 m-auto  flex px-4">
            <input
              type="text"
              placeholder="Ask here"
              className="w-full h-full p-5 outline-none "
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button onClick={askQuestin} className="outline-none">
              Ask
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default App;
