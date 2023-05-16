import React, { createContext, useState } from "react";
export const addData = createContext();
export const updateDate = createContext();

function ContextShare({ children }) {
  //register data
  const [useradd, setUserAdd] = useState("");
  //update data
  const [editdata, seteditdata] = useState("");

  return (
    <>
      <addData.Provider value={{ useradd, setUserAdd }}>
        <updateDate.Provider value={{ editdata, seteditdata }}>
          {children}
        </updateDate.Provider>
      </addData.Provider>
    </>
  );
}

export default ContextShare;
