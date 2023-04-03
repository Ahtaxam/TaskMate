import React, { useState } from 'react'

function Home() {
  const [task , setTask] = useState();


  const addTask = () => {
    console.log(task);
  }
  return (
    <div>
        <h1 id='name'>Task Mate</h1>
        <div id='Header'>
          <input type="text" placeholder="Enter Task"  id='addTask' onChange={(e) => setTask(e.target.value)}/> 
          <button id='addBtn' onClick={addTask} >Add</button> 
        </div>

        <hr/>
    </div>
  )
}

export default Home