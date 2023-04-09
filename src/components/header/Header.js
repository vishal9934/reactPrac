

import "./style.css"

function header({name}){
    return (
        <div className="header">
            <h1>{name}</h1>
            {/* <h1>my job is {props.job}</h1> */}
        </div>
    )
}
export default header;