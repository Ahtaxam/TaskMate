import React  from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import SingleTask from './SingleTask'



function Tasks({tasklist , onDelete , onDrag}) {

  const handleOnClick = (id) => {
    onDelete(id)
  }

  const handleDrag = (result) => {
    onDrag(result)
  }


  return (
    <div id='tasks'>
      <span id='tasks__heading'>Active Tasks</span>
      <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div id='activeTasks' {...provided.droppableProps} ref = {provided.innerRef} >
          {
            tasklist.map((obj, index) => (
              <Draggable key={obj.id} draggableId={obj.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <SingleTask name={obj.task} id={obj.id} onclick={handleOnClick} />
                  </div>
                )}
              </Draggable>
            )
            )
          }
          {provided.placeholder}
        </div>
        )
      }
      </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks