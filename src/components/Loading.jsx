import React, { useState } from "react";
import RingLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [color, setColor] = useState("#aaaaaa");

  return (
    <div className="fixed bg-black bg-opacity-30 top-0 left-0 w-screen h-screen flex items-center justify-center z-[100000000000]">
      <div className="sweet-loading">
        <RingLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loading;
