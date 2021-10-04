import React from 'react'
import './Footer.css'
import { Input, Button } from 'semantic-ui-react'

function Footer() {
    return (
        <div className='foot'>
            
                    <div className='col'>
                        <h4>NEWSLETTER SIGN <Input placeholder='Enter your Email' /> <Button>Subscribe</Button> </h4>
                    </div>
                    
        </div>
    )
}

export default Footer

