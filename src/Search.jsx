import React from "react";

const searchDivStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
};
const formStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const searchBarStyle = {
  maxWidth: "80%",
  width: "90vw",
  height: "50px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  fontSize: "18px",
  padding: "0 10px",
  marginBottom: "20px",
};

function Search() {
  return (
    <div style={searchDivStyle}>
      <form style={formStyle}>
        <input style={searchBarStyle} type="text" placeholder="Search 🪐🌍" />
      </form>
    </div>
  );
}

export default Search;
