import React, { useEffect } from "react";
import authServices from "../services/auth.services";

const Collection = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    setCurrentUser(authServices.getCurrentUser());
  }, []);
  return (
    <div style={{ padding: "3rem", minHeight: "90.2vh" }}>
      {!currentUser && (
        <div>
          <h1>要先登入才能訪問此頁面</h1>
        </div>
      )}
      {currentUser && <div>Collection</div>}
    </div>
  );
};

export default Collection;
