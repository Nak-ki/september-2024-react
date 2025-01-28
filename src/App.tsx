
import './App.css'
import {RouterProvider} from "react-router-dom";
import {MyContext, switchTheme} from "./context/myContex.tsx";
import {router} from "./routers/router.tsx";
import {useState} from "react";

function App() {

    const [status, setStatus] = useState<boolean>(switchTheme.flag)
  return (
    <>
        <MyContext.Provider value={{
            flag: status,
            trigger: (obj) => {
                setStatus(!obj)
                console.log(obj)
            }
        }}>
            <RouterProvider router={router}/>
        </MyContext.Provider>
    </>
  )
}

export default App

