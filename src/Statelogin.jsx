import React from 'react';

// import './App.css';
import { useState } from 'react';

const Statelogin=()=>{
    const [data,setdata]=useState('')
    const [data1,setdata1]=useState('')
    

    const datachane = (event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data)
    }

    const handlesubmit=(event)=>{
        event.preventDefault()
        setdata1(data)
        console.log("form data",data)
    }

    
    return(
        <div>
            <div className="item1">
                <div className="item2">
                <div className="item4">
                        <p className='item3'>Login Form</p>
                        <form onSubmit={handlesubmit} >
                            <label htmlFor="name">Username</label>
                            <input type="text" placeholder='Enter your username' name='name'  onChange={datachane}/>
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder='password' name='password' onChange={datachane} />
                            <input type=''/>
                            <input type="submit" />
                        </form>
                        <div>
                            <p>{data1.name}</p>
                            <p>{data1.password}</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Statelogin


// const namechange = (event)=>{
//     setname(event.target.value)
//     console.log(name,"name")
// }
// const passchange = (event)=>{
//     setpassword(event.target.value)
//     console.log(password,"password")
// }

// const changes=(event)=>{
//     event.preventDefault()
//     setname(name)
//     setpassword(password)
//     console.log(name,password,"username and password")
// }
