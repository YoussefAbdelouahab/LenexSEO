import "./ArrowButton.scss"
export default function ArrowButton({text} : {text : string}) {
    return (
        <>
          <button className="ArrowButton">{text} <img  className="arrow1" src="/assets/Arrow 1.svg" alt="" /> <img className="arrow2" src="/assets/Arrow 2.svg" alt="" /></button>
        </>
    );
}