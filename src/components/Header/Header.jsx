import { useState, useEffect } from "react"
import "./Header.scss"

import book from "/img/book.svg"
import strelka from "/img/strelka.svg"

export default function Header ( {isLight, setIsLight} ) {

    const [isOpen, setIsOpen] = useState(false)

    const [fontName, setFontName] = useState("Sans Serif")



    useEffect(() => {
        document.body.style.backgroundColor = isLight ? "#FFFFFF" : "#050505"

        document.querySelectorAll("*").forEach(el => {
            el.style.color = isLight ? "#2D2D2D" : "#FFFFFF"
        })

    }, [isLight])

    useEffect(() => {
        const fontMap = {
          "Sans Serif": "Inter",
          "Serif": "Lora",
          "Mono": "Inconsolata"
        }

        document.querySelectorAll("*").forEach(el => {
            el.style.fontFamily = fontMap[fontName]
        })
      }, [fontName])

    return (
        <header>
            <img src={book} alt="" />
            <div className="fontAndThemeChanger">
                <div className="fontChanger">
                    <button className="fontName" onClick={() => setIsOpen(prev => !prev)}>
                        {fontName}
                        <img src={strelka} alt="" />
                    </button>
                    {isOpen && (
                        <ul className={`fonts ${!isLight ? "darkFonts" : ""}`}>
                            <li className="li"><button className="font" onClick={(e) => {
                                setIsOpen(false)
                                setFontName(e.target.textContent)
                            }}>Sans Serif</button></li>
                            <li className="li"><button className="font" onClick={(e) => {
                                setIsOpen(false)
                                setFontName(e.target.textContent)
                            }}>Serif</button></li>
                            <li className="li"><button className="font" onClick={(e) => {
                                setIsOpen(false)
                                setFontName(e.target.textContent)
                            }}>Mono</button></li>
                        </ul>
                    )}
                </div>
                <div className="line"></div>
                <button className="themeChanger" onClick={() => setIsLight(prev => !prev)}>
                    <div className={`switch ${!isLight ? "darkSwitch" : ""}`}>
                        <div className="circle"></div>
                    </div>
                    <svg className={!isLight ? "darkSvg" : ""} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </header>
    )
}