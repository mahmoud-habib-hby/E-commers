import React, { createContext,  useState } from "react";

export let Text = createContext();

export function TextProvider({ children }) {
const [log,setlog]=useState([])

function addlog(name,email,pasword){
    let a=[{
        Name:name,
        Email:email,
        Pasword:pasword
    }]
    setlog(a)
}
function deletlog(){
    setlog([])
}
  let l = localStorage.getItem("data");
  let initialData = [];

  try {
    initialData = l ? JSON.parse(l) : [];
  } catch (e) {
    console.error("JSON parse error:", e);
    initialData = [];
  }

  const [arr, setarr] = useState(initialData);

  function add(name, number, id) {
    let a = {
      name: name,
      number: number,
      id: Date.now()
    };
    const updatedArr = [...arr, a];
    setarr(updatedArr);
    localStorage.setItem("data", JSON.stringify(updatedArr));
  }

  const delet = (ide) => {
    const newVal = arr.filter((data) => data.id !== ide);
    setarr(newVal);
    localStorage.setItem("data", JSON.stringify(newVal));
  };

  return (
    <Text.Provider value={{ arr, add, delet ,log,addlog,deletlog}}>
      {children}
    </Text.Provider>
  ); 
}
