import { useState } from "react"

import "./InputBox.scss"

import search from "/img/search.svg"

export default function InputBox ( {isLight, setWord} ) {

    const [current, setCurrent] = useState("")

    const [isEmpty, setIsEmpty] = useState(false)

    

    return (
        <div className="inputBox">
            <input className={`${!isLight ? "darkInput" : ""} ${isEmpty ? "inputError" : ""}`} value={current} onChange={(e) => {
                setCurrent(e.target.value)
                setIsEmpty(false)
            }} type="text" placeholder="Search for any word…" />
            <button className="search" onClick={() => current.trim() !== "" ? setWord(current) : setIsEmpty(true)}><img src={search} alt="" /></button>
            {isEmpty && <p className="error">Whoops, can’t be empty…</p>}
        </div>
    )
}