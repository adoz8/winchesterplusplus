import React from "react";
import "./title.css";
import "animate.css";

const Title = () => {
    return(
        <>
            <div className="title__contianer">
                <div className="title__line-container">
                    <div className="title__Hi">
                        <TitleHeader arrayOfLetters={["H", "i", ",", ]}/>
                    </div>
                    <TitleLetterSpace/>
                    <div className="title__Im">
                        <TitleHeader arrayOfLetters={["I", "'", "m"]}/>
                    </div>

                </div>
                <div className="title__line-container title__Name">
                    <TitleHeader arrayOfLetters={["B", "y", "r", "o", "n"]}/>
                    <TitleLetterSpace/>
                    <TitleHeader arrayOfLetters={["L", "l", "o", "y", "d", "-", "W", "a", "k", "e", "m", "a", "n"]}/>      
                </div>
            </div>
        </>
    )
}

function TitleHeader({ arrayOfLetters })
{
    return(
        <>
            {
                arrayOfLetters.map(letter => <TitleLetter letter={letter}/>)
            }
        </>
    )
}

function TitleLetter({ letter }){
    return(
        <>
            <span className="title__letter">{ letter }</span>
        </>
    )
}

function TitleLetterSpace()
{
    return(
        <>
            <span className="title__letter-space"/>
        </>
    )
}

export default Title;