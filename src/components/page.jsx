import React, { Component, useRef, useEffect } from "react";

const Page = () => {
  const myRef = useRef(null);

  const scrollToRef = ref => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <React.Fragment>
      <div style={{ height: 600 }} />
      <div ref={myRef}>I wanna be seen</div>
      <div style={{ height: 1500 }} />
      <button onClick={() => scrollToRef(myRef)} id="gg">
        Click to scroll{" "}
      </button>
    </React.Fragment>
  );
};

export default Page;
