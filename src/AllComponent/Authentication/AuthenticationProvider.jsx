import React, { createContext } from 'react';

export const MyContext = createContext();
const AuthenticationProvider = ({routes}) => {
  console.log(routes)
    return (
        <div>
            <MyContext.Provider value={"minazul"}>{routes}</MyContext.Provider>
        </div>
    );
};

export default AuthenticationProvider;