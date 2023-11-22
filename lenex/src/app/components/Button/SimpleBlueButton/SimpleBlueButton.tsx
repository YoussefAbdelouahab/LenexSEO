import "./SimpleBlueButton.scss"
export default function SimpleBlueButton({text}: {text: String}) {
    return (
        <>
            <button className="SimpleBlueButton">{text}</button>
        </>
    );
}