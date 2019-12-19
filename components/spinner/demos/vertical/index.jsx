import React from 'react';
import Spinner from 'kpc-react/components/spinner';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Spinner max={5} min={-5} vertical size="large" />
                <Spinner max={5} min={-5} vertical />
                <Spinner max={5} min={-5} vertical size="small" />
                <Spinner max={5} min={-5} vertical size="mini" />
            </div>
        )
    }
}