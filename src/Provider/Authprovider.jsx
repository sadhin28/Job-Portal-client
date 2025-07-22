import  { createContext, useState } from 'react';
export const AuthContext= createContext();
const Authprovider = ({children}) => {
   const [user,setuser]=useState(null)
   const [loading,setloading]=useState(true)
   const authInfo={
    user,
    setuser,
    loading,
    setloading,

   }
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default Authprovider;