import "../style.css"
import More from "./more";

function LInkcard(props) {
  return (
    <div className="link-card">
      <div className="icon">
        <i class={props.icon}></i>
      </div>
      <h3>{props.cardTitle}</h3>
      
      <p className="card-des">{props.cardDes}</p>
      <More title="Learn more"/>
    </div>
  );
}
export default LInkcard;