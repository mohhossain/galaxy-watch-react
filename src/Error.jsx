import { useEffect, useState } from "react";

const errorStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "url('https://freepngimg.com/save/30418-black-hole-transparent-image/923x842')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "100vh",
  textAlign: "center",
};

const whiteSpaceStyle = {
  backgroundColor: "black",
  height: "100vh",
  width: "100vw",
};

function Error() {
  const [whiteSpace, setWhiteSpace] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        window.location.href = "/";
      }, 600);
      setWhiteSpace(true);
      // if time is 2 second, console.log("2 seconds")
    }, 3000);
  }, []);
  return (
    <>
      {whiteSpace ? (
        <div style={whiteSpaceStyle}></div>
      ) : (
        <div style={errorStyle}>
          <h1>You have reached a blackhole!</h1>
          <h2> Teleporting you to the nearest galaxy...</h2>
        </div>
      )}
    </>
  );
}

export default Error;
