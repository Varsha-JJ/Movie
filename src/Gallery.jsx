import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './ocean.jpg';

import './Gallery.css';

const Gallery = (props) =>{
    return(
        <div className=''>
             <div className='box-1'>
                <img src={img} alt="" width="150px" height="150px" />
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
       

        
    )
}

export default Gallery