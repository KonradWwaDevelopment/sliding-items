import { SwipeableList, SwipeableListItem, Type } from "react-swipeable-list";
import {
  basicLeadingActions,
  basicTrailingActions,
  buttonsInOneContainerLeadingActions,
  buttonsInOneContainerTrailingActions,
  buttonsLayeredItemsLeadingActions,
  buttonsLayeredTrailingActions,
  contentOnTheLeftLeadingActions,
  contentOnTheLeftTrailingActions,
  contentOnTheRightLeadingActions,
  contentOnTheRightTrailingActions,
  multiButtonsAttachedToTheSidesLeadingActions,
  multiButtonsAttachedToTheSidesTrailingActions,
} from "./TrailingActions";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 60,
  borderBottom: "1px solid lightgrey",
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: "white",
};

const ReactSwipeAbleList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SwipeableList type={Type.IOS}>
        <SwipeableListItem
          trailingActions={basicTrailingActions()}
          leadingActions={basicLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>Default settings</div>
        </SwipeableListItem>
        <SwipeableListItem
          trailingActions={contentOnTheRightTrailingActions()}
          leadingActions={contentOnTheLeftLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>Buttons attached to the sides </div>
        </SwipeableListItem>
        <SwipeableListItem
          trailingActions={contentOnTheLeftTrailingActions()}
          leadingActions={contentOnTheRightLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>Buttons attached to the item </div>
        </SwipeableListItem>
        <SwipeableListItem
          trailingActions={buttonsLayeredTrailingActions()}
          leadingActions={buttonsLayeredItemsLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>Multi buttons layered </div>
        </SwipeableListItem>
        <SwipeableListItem
          trailingActions={buttonsInOneContainerTrailingActions()}
          leadingActions={buttonsInOneContainerLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>
            Multi buttons attached to the sides
          </div>
        </SwipeableListItem>
        <SwipeableListItem
          trailingActions={multiButtonsAttachedToTheSidesTrailingActions()}
          leadingActions={multiButtonsAttachedToTheSidesLeadingActions()}
        >
          <div style={{ ...listItemStyle }}>
            Multi buttons attached to the item
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
};

export default ReactSwipeAbleList;
