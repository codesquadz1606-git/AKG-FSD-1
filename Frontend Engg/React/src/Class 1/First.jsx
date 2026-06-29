import { useState } from "react";

function First(){ // component

    let name="Ayush"
    let city="Noida"

    let skills=["React","Next","Postgre","Mongodb","Native"]
    return( // We return a HTML
        <>
            <h1>This is my First component</h1>
            <h2>My name is {name} & city is {city}</h2>

            <h2>Skills : 
                {
                    skills.map((el)=>(
                        `${el} `
                    ))
                }
            </h2>
        </>
    )
}

export default First;

export function First1(){
    return(
        <>
            <h1>This is the second component</h1>
        </>
    )
}

export function First2(){
    let age=25;

    let status=false;
    return(
        <>
            <h1>Check Eligibility :
                {
                    (age>=21)?"Eligible":"Not Eligible"
                }

            </h1>

            <h1>
                {
                    // It works like && operator , where both the condition must be true.
                    status && <p>Show Paragraph</p>
                }
            </h1>
        </>
    )
}

export function StateComponent(){
    let [count,setCount]=useState(0)
    // console.log(count) // current , bound dispatchSetState(ki update karna current value ko)
    // console.log(setCount)

    function increase(){
        setCount(count+1);
    }

    function decrease(){
        setCount(count-1)
    }

    let [status,setStatus]=useState(true);
    console.log(status)
    return(
        <>
            <h1>UseState Hook</h1>

            <div>
                <button onClick={increase}>+</button>
                <h3>{count}</h3>
                <button onClick={decrease}>-</button>
            </div>

            <div>
                <button onClick={()=>{setStatus(!status)}}>
                    {
                        (status)?
                        "Hide Para":
                        "Show Para"
                    }
                </button>
                {status && <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur ullam, voluptatum ipsam maiores dolorum tenetur perspiciatis temporibus, veritatis nisi ut ea recusandae inventore soluta dolores, repudiandae tempore reiciendis nam! Nostrum hic consequuntur temporibus dolorem soluta eos a sapiente dolorum harum dolor quia atque, blanditiis, numquam eaque nobis vitae excepturi? Repellat architecto laboriosam aliquid maiores accusantium! Temporibus, corrupti minus ut ab molestiae blanditiis nobis sint neque asperiores? Earum optio qui laboriosam quae suscipit impedit reprehenderit obcaecati, maiores provident nobis delectus quo dicta distinctio repellat fugit excepturi iusto odio. Nostrum minus consequatur repellat voluptatem aliquam reprehenderit nulla quisquam fugiat ad sit.
                </p>}
            </div>
        </>
    )
}