import React, { useEffect } from 'react';
import star from "../images/white_star_3x.png"
import doom from "../audio/doom.mp3"

function MoonBackground({theme}) {

  return (
    <div id="moonbg" className={`relative w-full h-full ${theme === "light" ? "opacity-0" : "opacity-1" }`}>
        <div>
            <p className='text-slate-300 text-center pt-20 text-lg xl:text-5xl animate-pulse'>Music is playing .... </p>
        </div>
        <div>
            <audio autoPlay>
                <source src={doom} />
            </audio>
        </div>
        <div className={`absolute top-[10%] left-[100%] size-5 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[20%] left-[90%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        <div className={`absolute top-[30%] left-[40%] size-3 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[25%] left-[45%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        <div className={`absolute top-[5%] left-[10%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[30%] left-[5%] size-2 twinkle2`}>
            <img src={star} />
        </div>
        
        
        <div className={`absolute top-[10%] left-[50%] size-1 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[10%] left-[30%] size-3 twinkle2`}>
            <img src={star} />
        </div>
        
        
        <div className={`absolute top-[10%] left-[80%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[90%] left-[230%] size-4 twinkle2`}>
            <img src={star} />
        </div>
        
        
        <div className={`absolute top-[80%] left-[40%] size-1 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[60%] left-[90%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        <div className={`absolute top-[35%] left-[85%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[45%] left-[5%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        <div className={`absolute top-[60%] left-[20%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[90%] left-[55%] size-2 twinkle2`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[89%] left-[10%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        
        
        <div className={`absolute top-[70%] left-[10%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[90%] left-[90%] size-2 twinkle2`}>
            <img src={star} />
        </div>

        <div className={`absolute top-[60%] left-[70%] size-2 twinkle1`}>
            <img src={star} />
        </div>
        <div className={`absolute top-[70%] left-[50%] size-2 twinkle2`}>
            <img src={star} />
        </div>



       
       
    </div>
  )
}

export default MoonBackground