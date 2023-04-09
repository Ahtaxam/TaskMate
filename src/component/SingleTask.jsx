import React from 'react'
import  {VscListUnordered}  from 'react-icons/vsc';


function SingleTask({name , onclick , id}) {
  return (
        <div id='singleTask'
         >
        <div id='singleTask_define'>
        <VscListUnordered  id='singleTask_icon' />
        <span id='singleTask_text' >{name}</span>
        </div>
        <div>
        <button id='singleTask__delete' onClick={() => onclick(id)} >Delete</button>
        </div>
    </div>
  )
}

export default SingleTask