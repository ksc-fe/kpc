import React from 'react';
import Dialog from 'kpc-react/components/dialog';
import {Form, FormItem} from 'kpc-react/components/form';
import {Input} from 'kpc-react/components/input';
import {Button} from 'kpc-react/components/button';

import Message from 'kpc-react/components/message';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.set = this.set.bind(this);
        this.ok = this.ok.bind(this);
    }

    set(key, value) { this.setState({[key]: value}); }
    
    async ok(dialog) {
        // validate the form firstly
        const valid = await this.form.validate();
        if (valid) {
            // make the ok button show loading
            dialog.showLoading(); 
            // mock api
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            }).then(() => {
                // if success, close dialog 
                dialog.hideLoading();
                dialog.close();
            }, () => {
                // if error, don't close dialog
                dialog.hideLoading();
                Message.error('error occured');
            });
        }
    }
    
    render() {
        return (
            <div>
                <Button type="primary"
                    onClick={this.set.bind(this, 'show', true)}
                >Close Dialog Asynchronously</Button>
                <Dialog value={this.state.show} on$change-value={(c, show) => this.setState({show})} title="Customized ok callback"
                    ok={this.ok}
                >
                    <Form ref={i => this.form = i}>
                        <FormItem model="code" rules={{required: true, digits: true}} label="Code:">
                            <Input placeholder="please enter digits" value={this.state.code} on$change-value={(c, code) => this.setState({code})} />
                        </FormItem>
                    </Form>
                </Dialog>
            </div>
        )
    }
}