import React, { useState } from 'react';
import './Reg.css';
import { useSelector, useDispatch } from 'react-redux';
import { setdatas} from './counterSlice';
import {  useNavigate } from 'react-router-dom';

const Reg = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const values = useSelector((state)=>state.counter.datas) || []
    // const data1 = useSelector((state)=>state.counter.data1)
    // const data2 = useSelector((state)=>state.counter.data2)  

    const [data,setdata] = useState();

    const change = (event) =>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data);
    }

    const reform = (event) =>{
        event.preventDefault()
        dispatch(setdatas(data))
        
    }


    // const email = (event)=>{
    //     dispatch(setemail(event.target.value))
    // }
    // const password = (event)=>{
    //     dispatch(setpassword(event.target.value))
    // }
    // const cpassword = (event)=>{
    //     dispatch(setcpassword(event.target.value))
    // }

    // const regform = (event) =>{
    //     event.preventDefault()
    //     dispatch(displaymail(data))
    //     dispatch(displaypassword(data1))
    //     navigate('/log')    
    // }

  return (
        <div class="container-fluid">
            <div class="container">
                <form class="form-box1" onSubmit={reform}>
                    <h6 class="text-center">Register</h6>
                    <div class="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" name="email" onChange={change}   id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" name="password" onChange={change}  id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="exampleInputPassword2">Confrim Password</label>
                        <input type="password" class="form-control" name="cpassword" onChange={change}  id="exampleInputPassword2" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn mt-3">Signup</button>
                </form>
            </div>
           <div>
            {values?.map((item)=>(
                <>
                <p>email : {item.email}</p>
                <p>password : {item.password}</p>
                <p>cpassword : {item.cpassword}</p>
                </>
            ))}
           </div>
        </div>
            
  )
}

export default Reg
