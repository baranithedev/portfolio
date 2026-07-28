import React, { useEffect, useState } from 'react'
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md"
import { useTheme } from '../contexts/ThemeContext'

const ThemeIcon = ({mode, size}) => {
    return {
        'dark': <MdFlashlightOff size={size}/>,
        'light': <MdFlashlightOn size={size}/>
    }[mode == 'light' ? 'dark': 'light']
}

const ThemeManager = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="position-fixed" style={{ right: "12px", bottom: "12px", zIndex: 1050 }} onClick={toggleTheme}>
            <button className="btn btn-light rounded-circle d-flex align-items-center justify-content-center shadow p-0" style={{ width: "48px", height: "48px" }}>
                <ThemeIcon mode={theme} size={22}/>
            </button>
        </div>
  )
}

export default ThemeManager