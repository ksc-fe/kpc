import React from 'react';
import Pagination from 'kpc/components/pagination';

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Pagination total={200} showGoto />
            </div>
        )
    }
}