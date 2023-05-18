import { useState } from "react";
import CustomSwipeAbleItem from "./CustomSwipeableItem";

export const CustomSwipeAbleList = () => {
  const [pointerDown, setPointerDown] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
      onPointerUp={() => setPointerDown(false)}
      onPointerLeave={() => setPointerDown(false)}
    >
      <CustomSwipeAbleItem
        pointerDown={pointerDown}
        setPointerDown={setPointerDown}
        backgroundColor="red"
      />
      <CustomSwipeAbleItem
        pointerDown={pointerDown}
        setPointerDown={setPointerDown}
        backgroundColor="red"
      />
      {/*<CustomSwipeAbleItem*/}
      {/*  pointerDown={pointerDown}*/}
      {/*  setPointerDown={setPointerDown}*/}
      {/*  backgroundColor="black"*/}
      {/*  transform={transform}*/}
      {/*/>*/}
      {/*<CustomSwipeAbleItem*/}
      {/*  pointerDown={pointerDown}*/}
      {/*  setPointerDown={setPointerDown}*/}
      {/*  backgroundColor="yellow"*/}
      {/*  transform={transform}*/}
      {/*/>*/}
      {/*<CustomSwipeAbleItem*/}
      {/*  pointerDown={pointerDown}*/}
      {/*  setPointerDown={setPointerDown}*/}
      {/*  backgroundColor="blue"*/}
      {/*  transform={transform}*/}
      {/*/>*/}
      {/*<CustomSwipeAbleItem*/}
      {/*  pointerDown={pointerDown}*/}
      {/*  setPointerDown={setPointerDown}*/}
      {/*  backgroundColor="green"*/}
      {/*  transform={transform}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    height: 50,*/}
      {/*    backgroundColor: "red",*/}
      {/*    transform,*/}
      {/*  }}*/}
      {/*  ref={ref}*/}
      {/*  onPointerDown={() => setPointerDown(true)}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    height: 50,*/}
      {/*    backgroundColor: "black",*/}
      {/*    transform,*/}
      {/*  }}*/}
      {/*  ref={ref}*/}
      {/*  onPointerDown={() => setPointerDown(true)}*/}
      {/*/>*/}
    </div>
  );
};
