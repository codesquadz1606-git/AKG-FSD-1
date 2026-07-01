import { useLocation } from "react-router-dom"

export default function NotFound(){
    const {pathname}=useLocation()
    console.log(pathname);
    return(
        <>
            <h1>Page Do Not Exists at {pathname}</h1>
        </>
    )
}