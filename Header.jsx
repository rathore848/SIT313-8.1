import React from 'react'
import images from '../images copy/img-3.jpg'


function Header() {
    return (
        <div  style={{backgroundImage: `url(${images})`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover', width: '100vw',height: '40vh' }}>
           <h1 style= {{color: 'white', fontSize: '30px', textAlign: 'center', margin: '0px', paddingTop: '100px'}}>
            IService 
           </h1>
        <p style= {{color: 'wheat', fontSize: '20px', textAlign: 'center', paddingTop: '50px' }}>
            where Technology meats Destination
        </p>
           
        </div>
    )
}

export default Header
