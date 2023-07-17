import { useState } from "react"
import Child1 from "./Childc1"
import Child2 from "./Chldc2"

const Parent = () => {

    let [selectedOptions, setSelectedOptions] = useState("")

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1 changeState = {setSelectedOptions}/>
            <Child2 changeState = {setSelectedOptions}/>
            <div>Selected Options: {selectedOptions}</div>
        </div>
    )
}

export default Parent