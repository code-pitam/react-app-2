import "../style.css"


import More from "./more"
function Heading(params) {
    return(
        <div className="heading">
            <p>Your user research Swiss Army knife</p>
            <More title="See all features" />
        </div>
    )
}
export default Heading