const Task = ({ text, state, children}) => {
    return (
        <>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item" title={state}> {text}, {children} </li>
            </ol>
        </>
    );
};

export default Task;