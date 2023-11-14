import React from 'react';
import './Sample.css'

import 'bootstrap/dist/css/bootstrap.min.css';

// import img from './pose_f9.png'

const Sample = (props) =>{
    return(
     
    
        <div class="card mt-5">
            <div class="card-body">
                <img className={props.imgclass} src={props.img} alt="" />
                <h5 class="card-title">{props.title}</h5>
                <h6 class={props.cls}>{props.subtitle}</h6>
            </div>
        </div>   
     

        



    )
}

export default Sample;