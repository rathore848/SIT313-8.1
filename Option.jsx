import React from 'react'
import img from '../images copy/img.jpeg'
import image from '../images copy/image-2.jpeg'
import image3 from '../images copy/image-3.jpeg'
import image4 from '../images copy/images-4.jpeg'
import image5 from '../images copy/images-5.png'
import image6 from '../images copy/images-6.jpeg'
import './Option.css'



function Option() {
    return (
        <div className = 'pho-container'>
            <figure>
                <img src = {img} alt ='Ethical Hacking' width = {300} height = {200} />
                <figcaption>Ethical Hacking</figcaption>
            </figure>
            <figure>
                <img src = {image} alt ='Desktop Setup' width = {300} height = {200} />
                <figcaption>Desktop Setup</figcaption>
            </figure>
            <figure>
                <img src = {image3} alt ='Areas as an Software Engineer' width = {300} height = {200} />
                <figcaption>AWS</figcaption>
            </figure>
            <figure>
                <img src = {image4} alt ='Areas as an Software Engineer' width = {300} height = {200} />
                <figcaption>Networking</figcaption>
            </figure>
            <figure>
                <img src = {image5} alt ='Areas as an Software Engineer' width = {300} height = {200} />
                <figcaption>Software Development</figcaption>
            </figure>
            <figure>
                <img src = {image6} alt ='Areas as an Software Engineer' width = {300} height = {200} />
                <figcaption>PHP</figcaption>
            </figure>
        </div>
    )
}

export default Option
