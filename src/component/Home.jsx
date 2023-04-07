import React, { useState , useEffect } from 'react'
import Tasks from './Tasks'

function Home() {
  const [tasks, setTasks] = useState([]);
  const [value , setValue] = useState('');
  

  const addTask = () => {
    if(value === '') return alert('Please enter a task');
    const tasks = localStorage.getItem('tasks');
    let newTask = {
      id: Math.floor(Math.random() * 1000),
      task: value
    }
    if(tasks){
      let taskList = JSON.parse(tasks);
      taskList.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }
    else{
      localStorage.setItem('tasks', JSON.stringify([newTask]));
    }
    setValue('');
  }

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      setTasks(JSON.parse(tasks))
    }
  },[value])




  return (
    <div>
        <h1 id='name'>Task Mate</h1>
        <div id='Header'>
          <input type="text" placeholder="Enter Task"  id='addTask'value={value} onChange={(e) => setValue(e.target.value)}/> 
          <button id='addBtn' onClick={addTask} >Add</button> 
        </div>

        <hr/>
        <Tasks tasklist = {tasks}/>
    </div>
  )
}

export default Home