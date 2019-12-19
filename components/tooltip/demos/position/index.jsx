import React from 'react';
import Tooltip from 'kpc-react/components/tooltip';
import {ButtonGroup, Button} from 'kpc-react/components/button';

export default class Demo extends React.Component {
    render() {
        return (
            <ButtonGroup>
                {['left', 'right', 'top', 'bottom'].map((value, key) => {
                    return (
                        <Tooltip
                            content={value}
                            position={value}
                        >
                            <Button>{value}</Button>
                        </Tooltip>
                    )
                })}
            </ButtonGroup>
        )
    }
}