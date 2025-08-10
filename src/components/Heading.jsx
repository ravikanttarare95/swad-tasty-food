import React from "react";

function Heading({ headingTitle }) {
  return (
    <h1 className="mx-auto w-fit text-3xl md:text-4xl font-extrabold text-gray-600 drop-shadow-lg pb-8 mb-8 ">
      {headingTitle}
    </h1>
  );
}

function HeadingSecondary({ headingTitle }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold w-fit mx-auto text-gray-500 mb-15 flex flex-col items-center gap-3">
      {headingTitle}
      <div className="border-b-5 w-[30%] rounded-full"></div>
    </h2>
  );
}

export default Heading;
export { HeadingSecondary };
