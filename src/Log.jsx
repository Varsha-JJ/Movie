import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Log.css';

const Log = () => {
    const regdata = useSelector((state)=>state.counter.datas)
    const emailview = useSelector((state)=>state.counter.email)
    const passwordview = useSelector((state)=>state.counter.password)
  return (
    <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <form class="form-box" >
                            <h6 class="text-center">Login</h6>
                            <div class="form-group">
                                <label htmlFor="exampleInputEmail">Email address</label>
                                <input type="email" name="email" class="form-control" id="exampleInputEmail"  aria-describedby="emailHelp" placeholder="Enter email" required/>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputPassword">Password</label>
                                <input type="password" name='password' class="form-control" id="exampleInputPassword"  placeholder="Password" required/>
                            </div>
                            <button type="submit" class="btn mt-3">Login</button>
                            
                        </form>
                    </div>
                    <div>
                        <p>email : {emailview}</p>
                        <p>password :{passwordview} </p>
                    </div>
                    {regdata}
                </div>
            </div>
        </div>
  )
}

export default Log
