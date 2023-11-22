import "./SimpleArrowButton.scss"
import Arrow1 from "/assets/Arrow 1.svg";
import Arrow2  from "/assets/Arrow 2.svg";
export default function SimpleArrowButton() {
    return (
        <>
          <button className="SimpleArrowButton"><img  className="arrow1" src="/assets/Arrow 1.svg" alt="" /> <img className="arrow2" src="/assets/Arrow 2.svg" alt="" /></button>
        </>
    );
}