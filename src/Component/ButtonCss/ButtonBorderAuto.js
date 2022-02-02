import React from 'react'
import "./ButtonBorderAuto.scss"
export default function ButtonBorderAuto() {
    return (
        <div className = " border-auto">
            <div className ="btn-wrap" >
            <button   className = "btn">
            <span className ="btn-span1"></span>
            <span className ="btn-span2"></span>
            <span className ="btn-span3"></span>
            <span className ="btn-span4"></span>
            Hover Me
            </button>
            </div>
        </div>
    )
}
