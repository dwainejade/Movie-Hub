import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        width: 500,
        position: 'fixed',
        bottom: 0,
        background: '#111',
        zIndex: 100,
        boxShadow: '0px 1px 5px black',
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory()

    useEffect(() => {
        window.scroll(0, 0);

        if (value === 0) history.push('/')
        else if (value === 1) history.push('/movies')
        else if (value === 2) history.push('/series')
        else if (value === 3) history.push('/search')
    }, [value, history])

    return (
        <BottomNavigation
            style={{width:"100%"}}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="TV Shows" icon={<TvIcon />} />
            <BottomNavigationAction
                style={{ color: 'white' }}
                label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
