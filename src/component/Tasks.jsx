import React  from 'react'
import SingleTask from './SingleTask'



function Tasks({tasklist , id}) {

  const handleOnClick = (id) => {
    console.log( id)
  }


  return (
    <div id='tasks'>
      <span id='tasks__heading'>Active Tasks</span>
      <div id='activeTasks'>
        {
          tasklist.map((obj, index) => (
            <div key={index}>
            <SingleTask name = {obj.task} onclick = {handleOnClick} id = {index} ></SingleTask>
            </div>
          )
          )
        }
      </div>
    </div>
  )
}

export default Tasks