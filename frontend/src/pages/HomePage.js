import React from 'react'
import { Container, Typography } from '@material-ui/core'

import './HomePage.css'
import TasksList from '../components/TasksList'
import CreateTask from '../components/CreateTask'

const HomePage = (props) => {
    return (
        <Container className="homePage_container" >
            <Typography
                variant="h2"
                component="h1"
                color="primary"
                align="center"
                className="homePage_greeting"

            >
                Good Morning, Karl
            </Typography>

            <Typography
                variant="h4"
                component="h2"
                gutterBottom
            >
                Here are your tasks:
            </Typography>

            <TasksList />
            <CreateTask />
        </Container>
    )
}

export default HomePage
