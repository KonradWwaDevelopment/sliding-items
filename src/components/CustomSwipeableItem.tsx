import React, { Dispatch, SetStateAction } from "react";
import { useSwipe } from "../hooks/useSwipe";

type CustomSwipeAbleItemProps = {
  pointerDown: boolean;
  setPointerDown: Dispatch<SetStateAction<boolean>>;
  backgroundColor: string;
};

const CustomSwipeAbleItem = (props: CustomSwipeAbleItemProps) => {
  const { transform, ref } = useSwipe(props.pointerDown);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 50,
        borderBottom: "1px solid lightgrey",
        borderWidth: "80%",
        transform,
      }}
      ref={ref}
      onPointerDown={() => props.setPointerDown(true)}
    >
      Custom Swipeable Item
    </div>
  );
};

export default CustomSwipeAbleItem;
