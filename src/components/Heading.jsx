import React from "react";

function Heading({ headingTitle }) {
  return (
    <h1 className="mx-auto w-fit text-3xl md:text-4xl font-bold text-gray-700 drop-shadow-lg pb-8 mb-8 flex flex-col items-center gap-3">
      {headingTitle}
      <div className="border-b-5 w-[30%] rounded-full"></div>
    </h1>
  );
}

export default Heading;
