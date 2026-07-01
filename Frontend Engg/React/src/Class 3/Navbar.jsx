import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <header style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h1>Logo</h1>
                <div style={{display:"flex",gap:"30px",fontSize:"1.2rem"}}>

                    {/* a tag is not used for single page application */}
                    {/* <a href="/">Home</a>
                    <a href="/about">About</a> */}

                    {/* For SPA */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </header>
        </>
    )
}