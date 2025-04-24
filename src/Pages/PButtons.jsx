import { useState } from "react";
import Buttons from "../Components/Buttons";
import Task from "../Components/Task"
import TaskList from "../Components/TaskList"

const PButtons = () => {

    const [showList, setShowList] = useState (false);

    const addList = () => setShowList(true);
    const deleteList = () => setShowList(false);

    return(
        <div className="text-center p-4"> 
         <Buttons onAgregar={addList} onEliminar={deleteList} />

         {showList && (<div className="mt-4">
         <TaskList/>
        </div>
      )}
    </div>
  );
    


    
}

export default PButtons;