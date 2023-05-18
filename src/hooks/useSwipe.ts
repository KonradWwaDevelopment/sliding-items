import { useEffect, useRef, useState } from "react";

export const useSwipe = (pointerDown: boolean) => {
  const ref = useRef<any>();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const pixelLimit = isMobile ? 70 : 150;
  const [mouseStartPosition, setMouseStartPosition] = useState<any>({
    x: 0,
    y: 0,
  });
  const [mouseCurrentPosition, setMouseCurrentPosition] = useState<any>({
    x: 0,
    y: 0,
  });
  const [startSquarePosition, setStartSquarePosition] = useState<any>({
    x: null,
    y: null,
  });
  const [squarePosition, setSquarePosition] = useState<any>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMouseCurrentPosition({ x: e.clientX, y: e.clientY });
      if (pointerDown) {
        setSquarePosition({
          x:
            mouseCurrentPosition.x -
            mouseStartPosition.x +
            startSquarePosition.x,
          y: mouseCurrentPosition.y,
        });
      }
    };

    const setSquareStartPosition = (e: MouseEvent) => {
      setMouseStartPosition({ x: e.clientX, y: e.clientY });
    };

    const updateSquarePosition = (e: TouchEvent) => {
      setMouseCurrentPosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
      setSquarePosition({
        x: mouseCurrentPosition.x - mouseStartPosition.x,
        y: mouseCurrentPosition.y,
      });
    };

    const setSquareStartPositionMobile = (e: TouchEvent) => {
      if (startSquarePosition.x === pixelLimit) {
        setMouseStartPosition({
          x: e.touches[0].clientX - pixelLimit,
          y: e.touches[0].clientY,
        });
      } else {
        setMouseStartPosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }
    };

    const setFinalSquarePosition = () => {
      if (mouseCurrentPosition.x - mouseStartPosition.x > pixelLimit) {
        setStartSquarePosition({ x: pixelLimit, y: 100 });
        isMobile && setMouseCurrentPosition({ x: pixelLimit, y: 100 });
        setSquarePosition({ x: pixelLimit, y: 100 });
      } else {
        setStartSquarePosition({ x: 0, y: 100 });
        isMobile && setMouseCurrentPosition({ x: 0, y: 100 });
        setSquarePosition({ x: 0, y: 100 });
      }
    };

    if (isMobile) {
      ref.current.addEventListener("touchmove", updateSquarePosition);
      ref.current.addEventListener("touchstart", setSquareStartPositionMobile);
      ref.current.addEventListener("touchend", setFinalSquarePosition);
      ref.current.addEventListener("touchcancel", setFinalSquarePosition);
    } else {
      ref.current.addEventListener("mousemove", updateMousePosition);
      ref.current.addEventListener("mousedown", setSquareStartPosition);
      ref.current.addEventListener("mouseup", setFinalSquarePosition);
      ref.current.addEventListener("pointermove", updateMousePosition);
      ref.current.addEventListener("pointerdown", setSquareStartPosition);
      ref.current.addEventListener("pointerup", setFinalSquarePosition);
    }
    return () => {
      if (isMobile) {
        ref.current.removeEventListener("touchmove", updateSquarePosition);
        ref.current.removeEventListener(
          "touchstart",
          setSquareStartPositionMobile
        );
        ref.current.removeEventListener("touchend", setFinalSquarePosition);
        ref.current.removeEventListener("touchcancel", setFinalSquarePosition);
      } else {
        ref.current.removeEventListener("mousemove", updateMousePosition);
        ref.current.removeEventListener("mousedown", setSquareStartPosition);
        ref.current.removeEventListener("mouseup", setFinalSquarePosition);
        ref.current.removeEventListener("pointermove", updateMousePosition);
        ref.current.removeEventListener("pointerdown", setSquareStartPosition);
        ref.current.removeEventListener("pointerup", setFinalSquarePosition);
      }
    };
  }, [
    isMobile,
    mouseCurrentPosition.x,
    mouseCurrentPosition.y,
    pointerDown,
    mouseStartPosition.x,
    mouseStartPosition.y,
    squarePosition.x,
    startSquarePosition.x,
    pixelLimit,
  ]);

  const transform = `translate(${squarePosition.x}px)`;

  return { transform, ref };
};
