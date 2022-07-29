import React, { useEffect } from "react";
import authServices from "../services/auth.services";

const Collection = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    setCurrentUser(authServices.getCurrentUser());
  }, []);
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && <div>要先登入才能訪問此頁面</div>}
      {currentUser && <div>Collection</div>}
    </div>
  );
};

export default Collection;
