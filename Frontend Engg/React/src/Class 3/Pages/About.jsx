import { Outlet, useNavigate } from "react-router-dom";

export default function About(){
    // use for switching the path as a spa form.
    let navigate=useNavigate()
    return(
        <>
            <h1>About Page</h1>
            <div>
                <button onClick={()=>{navigate("wa")}}>Web & Mobile Application</button>
                <button onClick={()=>{navigate("dm")}}>Digital Marketing</button>
                <button onClick={()=>{navigate("de")}}>Devops Engg</button>
            </div>

            {/* It is used for displaying the child elements. */}
            <Outlet/>
        </>
    )
}