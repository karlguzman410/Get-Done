import React from 'react'
import { AppBar, Container, Typography } from '@material-ui/core'

import './MainHeader.css'

const MainHeader = () => {
    return (
        <Container className="main-header_container">
            <AppBar className="main-header_appbar" position="fixed">
                <Typography>Test</Typography>
            </AppBar>
        </Container>
    )
}

export default MainHeader
