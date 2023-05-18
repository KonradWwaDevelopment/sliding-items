import { SwipeAction, TrailingActions } from "react-swipeable-list";
import { ErrorButton, InfoButton, WarningButton } from "./SwipeAbleListButtons";

const baseFlexStyle = {
  display: "flex",
  alignItems: "center",
};
export const contentOnTheLeft = {
  ...baseFlexStyle,
  justifyContent: "flex-start",
};

export const contentOnTheRight = {
  ...baseFlexStyle,
  justifyContent: "flex-end",
};

export const multiButtonsOnTheLeft = {
  ...baseFlexStyle,
  justifyContent: "flex-start",
};

export const multiButtonsOnTheRight = {
  ...baseFlexStyle,
  justifyContent: "flex-end",
};

export const basicLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => window.alert("Error")}>
        <div>
          <WarningButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const basicTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => window.alert("Error")}>
        <div>
          <InfoButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const contentOnTheLeftLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={contentOnTheLeft}>
          <WarningButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const contentOnTheRightTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={contentOnTheRight}>
          <InfoButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const contentOnTheRightLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={contentOnTheRight}>
          <WarningButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const contentOnTheLeftTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={contentOnTheLeft}>
          <InfoButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const buttonsLayeredItemsLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={{ display: "flex" }}>
          <WarningButton />
        </div>
      </SwipeAction>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={{ display: "flex" }}>
          <ErrorButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const buttonsLayeredTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={{ display: "flex" }}>
          <InfoButton />
        </div>
      </SwipeAction>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={{ display: "flex" }}>
          <ErrorButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const buttonsInOneContainerLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={multiButtonsOnTheLeft}>
          <ErrorButton />
          <WarningButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const buttonsInOneContainerTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={multiButtonsOnTheRight}>
          <InfoButton />
          <ErrorButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const multiButtonsAttachedToTheSidesLeadingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={multiButtonsOnTheRight}>
          <ErrorButton />
          <WarningButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};

export const multiButtonsAttachedToTheSidesTrailingActions = () => {
  return (
    <TrailingActions>
      <SwipeAction onClick={() => console.info("swipe action triggered")}>
        <div style={multiButtonsOnTheLeft}>
          <InfoButton />
          <ErrorButton />
        </div>
      </SwipeAction>
    </TrailingActions>
  );
};
