import { Typography, Container, Grid, Checkbox } from '@material-ui/core'
import React from 'react'

import './TaskItem.css'

const TaskItem = ({ name, deadline }) => {
    return (
        <Grid className="taskItem_container">
            <Checkbox style={{ color: "#FFFFFF" }} />
            <Grid item className="taskItem_gridItem_name">
                <Typography variant="h6" >
                    {name}
                </Typography>
            </Grid>
            <Grid item className="taskItem_gridItem_deadline">
                <Typography variant="h6" >
                    {deadline}
                </Typography>
            </Grid >
        </Grid >
    )
}

export default TaskItem
