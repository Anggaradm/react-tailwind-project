import React from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="font-poppins m-4">
      <div className="flex p-2">
        <h1 className="font-bold text-4xl justify-center mx-auto">RadmDev</h1>
      </div>
      <div id="project1" className="h-40 mt-4 p-4">
        <h2 className="font-semibold text-xl">Metime Project</h2>
        <div
          id="contentHead1"
          className="w-full bg-slate-700 mt-4 rounded-xl p-4 text-white text-justify text-sm"
        >
          <p>
            "Metime project" merupakan projek yang saya buat sendiri dengan
            men-slicing desain-desain yang saya sukai dari berbagai media
            sosial.
          </p>
          <div id="cta-button" className="mt-6 ">
            <button
              onClick={() => navigate("/")}
              className="bg-white text-slate-500 px-6 py-2 font-bold text-sm rounded-full hover:scale-105 hover:opacity-80"
            >
              see more
            </button>
          </div>
        </div>
        <div
          id="content1-1"
          className="w-full bg-slate-700 mt-4 rounded-xl p-4 text-white text-justify text-sm"
        >
          <ul>
            <li>
              <Link to="/saadi-designs1">Saadi_Designs - 1</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
