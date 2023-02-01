import React from "react";

const SaadiDesign1 = () => {
  return (
    <div id="container" className="bg-slate-800 text-white px-4 py-8 h-[100vh]">
      <div id="head" className="flex justify-between items-center">
        <div>
          <p>Welcome</p>
          <h2 className="font-medium text-3xl mt-2">Find your course</h2>
        </div>
        <div>search icon</div>
      </div>
      <div
        id="focus"
        className="flex justify-between items-center bg-amber-200 text-slate-800 mt-6 py-6 px-6 rounded-2xl"
      >
        <div>
          <p className="font-bold text-4xl">60% off</p>
          <p className="font-medium text-sm my-2">Feb 14 - Mar 20</p>
          <div>
            <button className="bg-slate-800 text-white mt-2 py-2 px-4 font-medium rounded-full">
              Join Course
            </button>
          </div>
        </div>
        <div className="w-[50%] h-40 bg-yellow-400">image</div>
      </div>
      <div id="content"></div>
    </div>
  );
};

export default SaadiDesign1;
