import "./AboutWord.scss"

import audio from "/img/audio.svg"
import link from "/img/link.svg"

export default function AboutWord ( {fetchData} ) {

    console.log(fetchData)
    const data = fetchData?.[0]

    return (
        <div className="aboutWord">
            <div className="about">
                <div className="word">
                    <div className="name">{data?.word}</div>
                    <div className="phonetic">{data?.phonetic}</div>
                </div>
                <img src={audio} alt="" />
            </div>
            <div className="meanings">
                {data?.meanings.map((item, i) => (
                    <div className="meaning" key={`dfg${i}`}>
                        <div className="partOfSpeech">
                            {item?.partOfSpeech}
                            <div className="line"></div>
                        </div>
                        <div className="definitions">
                            <div className="title">Meaning</div>
                            <ul>
                                {item?.definitions.map((def, i) => (
                                    <>
                                        <li key={i}>{def?.definition}</li>

                                        {def.example && (
                                        <li className="example" key={`a${i}`}>
                                            <span>“{def.example}”</span>
                                        </li>
                                        )}
                                    </>
                                ))}
                            </ul>
                        </div>
                        {item.synonyms.length !== 0 && (
                            <div className="synonyms">
                                <p>Synonyms</p>
                                <div className="synonymList">
                                    {item?.synonyms?.map((syn, i) => (
                                        <span key={`s${i}`}>
                                            {syn}{i !== item.synonyms.length - 1 && <span>, </span>}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="source">
                    <span>Source</span>
                    <a href={data?.sourceUrls[0]}>{data?.sourceUrls[0]}</a>
                    <img src={link} alt="" />
                </div>
            </div>
        </div>
    )
}