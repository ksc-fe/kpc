import React from 'react';
import Pagination from 'kpc-react/components/pagination';
import './index.styl';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Pagination noBorder total={200} size="large" />
                <Pagination noBorder total={200} />
                <Pagination noBorder total={200} size="small" />
                <Pagination noBorder total={200} size="mini" />
            </div>
        )
    }
}