import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
export default function Second({ name, city, skill }) {

    // props keywords accessing all the data from parent in object format.
    // console.log(props) // I know that in object it is name & city only , so I have destructured the keys from object
    return (
        <>
            <h1>Hello My name is {name} I live in {city}</h1>
            <h2>Skills = {skill}</h2>
        </>
    )
}

export function UseEffect() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(10);
    console.log(count)
    console.log(count1)
    // Use case 1: Without Dependency : It will run on each render in a page.
    // useEffect(()=>{
    //     console.log("Ist Use Case")
    // })

    // Use case 2: With Empty Array : It will on run on the first render , & will not run on re-renders.
    // useEffect(()=>{
    //     console.log("IInd Use Case")
    // },[])

    // Use case 3: With Dependency : It will only run when their is any change in the dependency.
    useEffect(() => {
        console.log("IIIrd Use Case")
    }, [count])
    return (
        <>
            <h1>Use Effect</h1>
            <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
            <button onClick={() => { setCount1(count1 + 10) }}>Increase Count1</button>
        </>
    )
}

export function FormHandlingManual() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    // input : event --> onchange (target : name(particular input pa konsa naam h) & value(jo input mae type kara h))

    function handleInputChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault() // Yeh form ka refresh ko rokk legaa.
        console.log(formData)
    }

    return (
        <>
            <h1>Form Handling</h1>

            {/* Yeh turant referesh ho jaata h */}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name : </label>
                <input type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your Name" />

                <br />

                <label htmlFor="">Email : </label>
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email" />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export function FormHandlingPackage() {
    const {
        register,
        reset, // values ko reset kardetaa h
        handleSubmit, // isma phela sa preventDefault inbuilt h
        formState: { errors }
    } = useForm()

    function handleData(data) {
        console.log(data);
        reset();
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit(handleData)}>
                <label htmlFor="">Name : </label>
                <input type="text"
                    {...register("name", { required: true,
                        maxLength: { value: 10 }, 
                        minLength: { value: 5 , message:"Minimum 5 character needed" } 
                    })} // this link with your input feild & extract the data
                    placeholder="Enter your Name" />
                {
                    errors.name && <span>{errors.name.message}</span>
                }
                <br />

                <label htmlFor="">Email : </label>
                <input type="email"
                    {...register("email")}
                    placeholder="Enter your Email" />
                <br />
                <input type="submit" />
            </form>

        </>
    )
}