import { Children } from "react";
import Task from "./Task"

const TaskList=({state,text, children})=> {
    return (
        <>

            <ol className="list-group list-group-numbered">
                <li className="list-group-item" title={state}>{text}, {children}  </li>
            </ol>
        </>
    );
} 
 

export default TaskList;