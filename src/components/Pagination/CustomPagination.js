import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    const handlePageChange = (page) => {
        window.scroll(0, 0)
        setTimeout(1000)
        setPage(page)
    }

    return (
        <div
            style={{
                width: '100%',
                diplay: 'flex',
                justifyContent: 'center',
                marginTop: 30,
                color: 'white'
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numOfPages}
                    color="primary"
                    onChange={(e) => handlePageChange(e.target.textContent)} 
                    hideNextButton
                    hidePrevButton
                    />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
