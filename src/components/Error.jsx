import { useState, useEffect } from "react";

function Error({children}) {
  return (
    <div className="w-full text-center uppercase bg-red-800 text-white p-3 mb-3 rounded-md">
      <h1 className="font-bold">{children}</h1>
    </div>
  );
}

export default Error;
