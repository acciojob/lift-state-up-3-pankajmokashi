
const Child2 = ({changeState}) => {
    return(
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={() => changeState("Option 2")}>Option 2</button>
        </div>
    )
}

export default Child2