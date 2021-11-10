import React from "react";

const OVERLAY_STYLE = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "rgba(0,0,0,.6)",
  zIndex: 99
};

const MODAL_STYLE = {
  width: "600px",
  height: "600px",
  position: "fixed",
  top: "50%",
  left: "50%",
  background: "#fff",
  zIndex: 99,
  padding: "30px",
  transform: "translate(-50%, -50%)"

};

export default function Modal({ children, visable, close }) {
  if (!visable) return null;
  return (
    <>
      <div style={OVERLAY_STYLE}></div>
      <div style={MODAL_STYLE}>
        <div>{children}</div>
        <button onClick={close}>Submit</button>
      </div>
    </>
  );
}
