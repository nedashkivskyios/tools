import React, { useContext } from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import SignIn from "../../Auth/SignIn";
import { AuthContext } from "../AuthProvider";
import TemporaryMain from "../TemporaryMain";

const Root = () => {
  const session = useContext(AuthContext);
  if (!session) {
      return (
          <Routes>
              <Route path="signin" element={<SignIn />} />
              <Route path="*" element={<Navigate to="signin" />} />
              <Route path="/" element={<Navigate to="signin" />} />
          </Routes>
      );
  }

  return (
    <Routes>
      <Route path="/" element={<TemporaryMain />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Root;
