import React from 'react';
import {Segment, Grid} from "semantic-ui-react";

const Loading = () => {
    return (
        <Segment style={{padding: '2em 0em', minHeight: 500}} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <h1>Loading ...</h1>
                </Grid.Row>
            </Grid>
        </Segment>
    );

}
export default Loading;