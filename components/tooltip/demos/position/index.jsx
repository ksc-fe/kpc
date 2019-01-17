import React from 'react';
import Tooltip from 'kpc/components/tooltip';
import {ButtonGroup, Button} from 'kpc/components/button';

export default class extends React.Component {
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