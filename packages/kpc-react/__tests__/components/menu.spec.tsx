import React, {createRef, useState, useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import {Menu, MenuItem, Layout, Aside} from '../../';
import {getElement, wait, dispatchEvent} from '../../../../test/utils';

describe('Menu', () => {
    it('when we collapse menu, all dropdown menus should be hidden', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const AsideMenu = ({collapse}: {collapse: boolean}) => {
            const [selectedKey, setSelectedKey] = useState('');

            return <Menu collapse={collapse} selectedKey={selectedKey}>
                <MenuItem key="1">
                    option 1
                    <Menu>
                        <MenuItem key="1-1"><span>option 1-1</span></MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="2">
                    option 2
                    <Menu>
                        <MenuItem key="2-1"><span>option 2-1</span></MenuItem>
                    </Menu>
                </MenuItem>
                <MenuItem key="3">
                    option 2
                    <Menu>
                        <MenuItem key="2-1"><span>option 2-1</span></MenuItem>
                        <MenuItem key="2-2"><span>option 2-1</span></MenuItem>
                    </Menu>
                </MenuItem>
            </Menu>
        };

        let setCollapse: any;
        const Test = () => {
            const [collapse, _setCollapse] = useState(false);
            setCollapse = _setCollapse;

            return <>
                <div onClick={() => _setCollapse(!collapse)}>click</div>
                <AsideMenu collapse={collapse} />
            </> 
        }

        ReactDOM.render(<Test />, container);

        setCollapse!(true);

        await wait();
        expect(getElement('.k-dropdown-menu.k-menu')).to.be.not.exist;

        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });
});
