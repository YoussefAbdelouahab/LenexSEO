import "./SimpleWhiteButton.scss"
export default function SimpleWhiteButton({text} : {text : string}) {
    return (
        <>
          <button className="SimpleWhiteButton">{text}</button>
        </>
    );
}