import "../style.css"


function More(props) {
    return(
        <div className="more">
            <p>{props.title}</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    )
}

export default More;