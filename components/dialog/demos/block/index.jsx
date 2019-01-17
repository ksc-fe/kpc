import React from 'react';
import Button from 'kpc/components/button';
import Dialog from 'kpc/components/dialog';

export default class extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({show: true})}
                    type="primary"
                >Show Dialog</Button>
                <Button onClick={() => this.setState({show1: true})}
                    type="primary"
                >Show No Footer Dialog</Button>
                <Dialog value={this.state.show}
                    ev$change-value={(c, show) => this.setState({show})}
                    b-header={
                        <div className="k-title">
                            <i className="ion-person"></i>
                            Custom Header
                        </div>
                    }
                    b-footer={
                        <>
                            Custom Footer
                            <Button onClick={() => this.setState({show: false})}>取消</Button>
                            <Button type="primary" onClick={() => this.setState({show: false})}>确认</Button>
                        </>
                    }
                >
                    Dialog Body 
                </Dialog>
                <Dialog value={this.state.show1}
                    on$change-value={(c, show1) => this.setState({show1})}
                    title="No Footer"
                    b-body="body"
                    b-footer-wrapper=""
                >
                </Dialog>
            </div>
        )
    }
}