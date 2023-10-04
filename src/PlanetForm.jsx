import React from "react";

const formDiv = {
  gridArea: "content",
  minHeight: "80vh",
  minWidth: "80%",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  padding: "1rem",
  width: "50%",
  height: "100%",
};

function PlanetForm() {
  return (
    <div style={formDiv}>
      <form style={formStyle}>
        <h1>Create your own planet</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="description">Description</label>
        <textarea id="description" />
        <label htmlFor="image">Image</label>
        <input type="text" id="image" />
        <label htmlFor="userId">User ID:</label>
        <input type="number" id="userId" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PlanetForm;
