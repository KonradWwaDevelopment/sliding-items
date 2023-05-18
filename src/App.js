// import ReactSwipeAbleList from "./components/ReactSwipeableList";
//BARDZO BARDZO WAŻNE!!!!!
import "react-swipeable-list/dist/styles.css";
import { CustomSwipeAbleList } from "./components/CustomSwipeableList";
import ReactSwipeAbleList from "./components/ReactSwipeableList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <ReactSwipeAbleList />
      <br />
      <br />
      <br />
      CUSTOM SWIPEABLE
      <br />
      <br />
      <br />
      <CustomSwipeAbleList />
    </div>
  );
};

export default App;
