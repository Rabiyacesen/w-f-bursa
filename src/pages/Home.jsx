import React, { useEffect, useState } from 'react'
import Yer from '../components/Yer'
import { v4 as uuidv4 } from 'uuid';
import './Home.css'
function  Home() {
    return (
        <>
       
            <div className='card text-center '>  
            </div>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {Yer.map(item => (
                    <div key={uuidv4()} className=" c ">
                        <div className='card-header '>
                            <h2>{item.adi}</h2>        
                                        </div>
                        <div className='card-body '>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Home