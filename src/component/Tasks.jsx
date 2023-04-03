import React, {useState} from 'react'

function Tasks() {
    const [activeTasks, setActiveTasks] = useState([]);
  return (
    <div id='tasks'>
        <div id='activeTasks'>
            <h3>Active Tasks</h3>
        </div>

        <div id='completedTasks'>
            <h3>Completed Tasks</h3>
        </div>
    </div>
  )
}

export default Tasks