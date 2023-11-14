import React from 'react';

import './Gallerygrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import img from './ocean.jpg';

const Gallerygrid=(props)=>{

   return (
    <div class="col-md-auto">
        <div class="card text-center" >
            <div class="card-body">
                <p>{props.id}</p>
                <img src={props.src} alt="" width="150px" height="150px" />
                <h5 class="card-title mt-2">{props.name}</h5>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    </div>
    
    )
}

export default Gallerygrid