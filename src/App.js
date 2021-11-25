import React, { useEffect, useState } from "react";
// import ServiceInstance from "./Services/Service";
import LoginScreen from "./Login/login";
import { Router } from "@reach/router";
import NavBarComponet from "./nav/Navbar/Navbar";

function App() {
  // const [initaialData, updateInitaialData] = useState([]);
  useEffect(() => {
    const userCredential = {
      userName: "admin",
      pswd: "admin",
    };
    localStorage.setItem("USER_CREDENTIAL", JSON.stringify(userCredential));
    //   const service = new ServiceInstance();
    //   const value = async () => {
    //     const data = await service.getmethod().then(function (arr) {
    //       return arr.data.data;
    //     });
    //     return data;
    //   };
    //   value().then((data) => updateInitaialData(data));
  }, []);

  // Empty array in the useEffect resembels the component Did mount

  return (
    <React.Fragment>
      <NavBarComponet />
      <Router>
        <LoginScreen path="/" />
      </Router>
    </React.Fragment>
  );
}

export default App;
