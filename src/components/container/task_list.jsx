import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default description',false,LEVELS.NORMAL)

    const changeState = (id) => {
        console.log('TODO: cambiar el estado de una tarea')
    }

  return (
    <div>
        <div>
            <h1>Tu tarea:</h1> 
        </div>
        {/* Pendiente mapear */}
        <TaskComponent task={defaultTask} />
    </div>
  )
}


export default TaskListComponent