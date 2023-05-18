import React from "react";

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  color: "white",
  height: "100%",
  minWidth: 120,
};

const buttonStyleRound = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 15,
  padding: 10,
  fontWeight: "bold",
  color: "white",
  marginLeft: 5,
  marginRight: 5,
  height: "100%",
};

export const InfoButton = () => {
  return (
    <div
      style={{
        ...buttonStyle,
        backgroundColor: "green",
      }}
      onClick={() => window.alert("Info")}
    >
      Info
    </div>
  );
};

export const InfoButtonRound = () => {
  return (
    <div
      style={{
        ...buttonStyleRound,
        backgroundColor: "green",
      }}
      onClick={() => window.alert("Info")}
    >
      Info
    </div>
  );
};

export const ErrorButton = () => {
  return (
    <div
      style={{
        ...buttonStyle,
        backgroundColor: "red",
      }}
      onClick={() => window.alert("Error")}
    >
      Error
    </div>
  );
};

export const ErrorButtonRound = () => {
  return (
    <div
      style={{
        ...buttonStyle,
        backgroundColor: "red",
      }}
      onClick={() => window.alert("Error")}
    >
      Error
    </div>
  );
};

export const WarningButton = () => {
  return (
    <div
      style={{
        ...buttonStyle,
        backgroundColor: "orange",
      }}
      onClick={() => window.alert("Warning")}
    >
      Warning
    </div>
  );
};

export const WarningButtonRound = () => {
  return (
    <div
      style={{
        ...buttonStyle,
        backgroundColor: "orange",
      }}
      onClick={() => window.alert("Warning")}
    >
      Warning
    </div>
  );
};
