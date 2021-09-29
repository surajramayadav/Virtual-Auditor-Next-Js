import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid } from '@material-ui/core';
import { TitleDescButton } from '@components/home/TitleDescButton/TitleDescButton';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `scrollable-auto-tab-${index}`,
//         'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
// }


export default function AutomaticScrollTabs({ data }) {
    console.log(data)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Grid container style={{ margin: "0rem 0rem" }}>
                <AppBar position="static" color="default" >
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {data.map((d, i) => (
                            <Tab
                                onClick={() => setValue(d.id)}
                                label={d.title}
                                id={`simple-tab-${i}`}
                                key={d.title}
                                ariaControls={`simple-tabpanel-${i}`}
                            />
                        ))}
                    </Tabs>
                </AppBar>
            </Grid>

            {
                data.map((d, i) => {
                    return (
                        <>{
                            d.id == value &&
                            <TabPanel value={value} index={d.id}>
                                <Grid container>
                                    <TitleDescButton key={i} data={d.cardData} />
                                </Grid>
                            </TabPanel>
                        }</>
                    )
                })
            }

        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        backgroundColor: "#f3efef",
        margin: "0 auto"
    },
}));