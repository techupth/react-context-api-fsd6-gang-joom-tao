import { useContext } from "react";
import { UserDataContext } from "../App";

function AppHeader() {
  const context = useContext(UserDataContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <div className="flex flex-col gap-4">
        <h2>สวัสดีคุณ {context.username}</h2>
        <img src={context.avatar} alt="" />
      </div>
    </div>
  );
}

export default AppHeader;
