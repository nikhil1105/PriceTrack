'use client'
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";

const element = [
    {src:"/assets/images/hero-1.svg",alt:"smartwatch"},
    {src:"/assets/images/hero-2.svg",alt:"bag"},
    {src:"/assets/images/hero-3.svg",alt:"lamp"},
    {src:"/assets/images/hero-4.svg",alt:"air fryer"},
    {src:"/assets/images/hero-5.svg",alt:"chair"},
    
]


export default function  Content  () {

    return(
        <div className=" my-20 w-[600px] sm:h-[500px] h-[350px] px-[20px] py-[50px] bg-slate-200 rounded-xl">
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        >
             {
                element.map((e)=>(
                    <img
                    src={e.src}
                    alt={e.alt}
                    // width={600}
                    // height={600}
                    className=" sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] mb-8 object-contain"
                    key={e.alt}
                    />
                ))
             }           
        </Carousel>
       
        
        </div>
    )
    
}