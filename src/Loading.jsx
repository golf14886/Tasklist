import { useContext } from "react";
import { UserContext } from "./App";
function Loading() {
  const { listData } = useContext(UserContext);
  const checkLoading = () => {
    if (listData.length > 0) {
      return <p>Loading...</p>;
    } else {
      return <p>NO TASKLIST ITEM</p>;
    }
  };
  return (
    <div className="loading-container flex justify-center mt-12">
      {checkLoading()}
    </div>
  );
}

export default Loading;
