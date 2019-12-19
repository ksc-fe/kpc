import React from 'react';
import {Tooltip} from 'kpc-react/components/tooltip';
import {ButtonGroup, Button} from 'kpc-react/components/button';

export default class Demo extends React.Component {
    render() {
        return (
            <ButtonGroup>
                <Tooltip content="hover">
                    <Button>hover</Button>
                </Tooltip>
                <Tooltip trigger="click" content="click">
                    <Button>click</Button>
                </Tooltip>
                <Tooltip canHover content="the text can be hovered">
                    <Button>can hover</Button>
                </Tooltip>
            </ButtonGroup>
        )
    }
}