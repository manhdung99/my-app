import React from 'react'
import ButtonAwesome from './ButtonAwesome'
import ButtonBorderMove from './ButtonBorderMove'
import ButtonRipple from './ButtonRipple'
import ButtonBorderAuto from './ButtonBorderAuto'
import ButtonNeon from './ButtonNeon'
import ButtonBorderCover from './ButtonBorderCover'
import './ButtonMain.scss'

export default function ButonCss() {
    return (
        <div className='button-wrap'>
            <div className='button-1'>
        <ButtonAwesome />
            </div>
            <div className='button-2'>
        <ButtonBorderMove />
        <ButtonBorderCover />
        <ButtonNeon />
        <ButtonBorderAuto />
            </div>
            <div className='button-3'>
        <ButtonRipple />
            </div>
        </div>
    )
}
