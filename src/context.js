import axios from "axios";
import React, { useState } from "react";
import data from "./data/mockUser"

const githubUrl = "https://api.github.com/users/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(data);

  const searchGithubUser = (user) => {
    let response = axios.get(`${githubUrl}${user}`).then((response) => {
      if (response) {
        setGithubUser(response.data);
      }
    });
  };

  console.log(githubUser)

  return (
    <AppContext.Provider value={{ searchGithubUser, githubUser }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
