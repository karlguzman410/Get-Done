import React from 'react'
import { Container, Grid, Paper } from '@material-ui/core'

import './TasksList.css'
import TaskItem from './TaskItem'

const tasks = [
    {
        id: 't1',
        name: 'Sleep',
        deadline: 'Today'
    },
    {
        id: 't2',
        name: 'Workout',
        deadline: 'Today'
    },
    {
        id: 't3',
        name: 'Eat',
        deadline: 'Today'
    },
    {
        id: 't4',
        name: 'Workout',
        deadline: 'Today'
    },
    {
        id: 't5',
        name: 'Workout',
        deadline: 'Today'
    },
    {
        id: 't6',
        name: 'Workout',
        deadline: 'Today'
    },
    {
        id: 't7',
        name: 'Workout',
        deadline: 'Today'
    },
]

const TasksList = (props) => {
    return (
        <Paper elevation={24} className="taskList_paper">
            <Container className="taskList_container">
                <Grid container spacing={1} className="taskList_gridContainer">
                    {tasks.map((task) => (
                        <Grid item key={task.id} className="taskList_gridItem">
                            <TaskItem
                                name={task.name}
                                id={task.id}
                                deadline={task.deadline} />
                        </Grid>

                    ))}
                </Grid>
            </Container>
        </Paper>
    )
}

export default TasksList
