import React from 'react';
import './Reglog.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Reglog=()=>{
    const [data,setdata]=useState()
    const [data1,setdata1]=useState()
    const [logdata,setlogdata]=useState()
    const [verify,setverify]=useState(null)
    const navigate = useNavigate()

    const change=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data)
    }

    const regform=(event)=>{
        event.preventDefault()
        setdata1(data)
        console.log("data1",data1)
        setdata({})
    }

    const logform=(event)=>{
        event.preventDefault()
        if(data1.email==logdata.email && data1.password==logdata.password)
        {
            console.log("success")
            setverify(true)
            navigate('/people')
            // setdata1({})
        }
        else{
            console.log("failed login")
            setverify(false)
        }
        
    }

    const logchange=(event)=>{
        setlogdata({...logdata,[event.target.name]:event.target.value})
        console.log("logdata",logdata);
    }

    return(
        <div class="container-fluid main-box mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <form class="form-box" onSubmit={logform}>
                            <h6 class="text-center">Login</h6>
                            <div class="form-group">
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail" value={logdata?.email || ''} onChange={logchange} aria-describedby="emailHelp" placeholder="Enter email" required/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" name='password' class="form-control" id="exampleInputPassword" value={logdata?.password || ''} onChange={logchange} placeholder="Password" required/>
                            </div>
                            <button type="submit" class="btn mt-3">Login</button>
                            <div>
                            { data1 ?
                                <>
                                <small>email : {data1.email}</small><br />
                                <small>password : {data1.password}</small>
                                </>
                                :
                                <small>no data available</small>
                            }
                            {
                                verify &&
                                <div>login successfull</div>
                            }
                            {
                                verify==false &&
                                <div>Invalid username or password</div>
                            }
                            </div>
                        </form>
                    </div>
                    <div class="col-sm">
                        <form class="form-box1" onSubmit={regform}>
                            <h6 class="text-center">Register</h6>
                            <div class="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" onChange={change} value={data?.email || ''} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" onChange={change} value={data?.password || ''} id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword2">Confrim Password</label>
                                <input type="password" class="form-control" name="cpassword" onChange={change} value={data?.cpassword || ''} id="exampleInputPassword2" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn mt-3">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reglog