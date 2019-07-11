/*!
 * kpc v1.0.0-beta.7
 *
 * Copyright (c) Kingsoft Cloud
 * Released under the MIT License
 * 
 * Documentation available at
 * https://ksc-fe.github.io/kpc/
 */

import {_$, localize} from './components/utils';

/* generate start */

import {Affix} from './components/affix';
import {App} from './components/app';
import {Badge} from './components/badge';
import {Breadcrumb, BreadcrumbItem} from './components/breadcrumb';
import {Button, ButtonGroup} from './components/button';
import {Card, CardColumn} from './components/card';
import {Carousel, CarouselItem} from './components/carousel';
import {Cascader} from './components/cascader';
import {Checkbox} from './components/checkbox';
import {Code} from './components/code';
import {Collapse, CollapseItem} from './components/collapse';
import {Datepicker} from './components/datepicker';
import {Dialog} from './components/dialog';
import {Drawer} from './components/drawer';
import {Dropdown, DropdownMenu, DropdownItem} from './components/dropdown';
import {Editable} from './components/editable';
import {Form, FormItem} from './components/form';
import {Icon} from './components/icon';
import {Input, Search} from './components/input';
import {Layout, Aside, Header, Body, Footer} from './components/layout';
import {Link} from './components/link';
import {Menu, MenuItem} from './components/menu';
import {Message} from './components/message';
import {MoveWrapper} from './components/moveWrapper';
import {Pagination} from './components/pagination';
import {Progress} from './components/progress';
import {Radio} from './components/radio';
import {Rate} from './components/rate';
import {Row, Col} from './components/grid';
import {ScrollSelect} from './components/scrollSelect';
import {Select, Option, OptionGroup} from './components/select';
import {Slider} from './components/slider';
import {Spinner} from './components/spinner';
import {Spin} from './components/spin';
import {Split} from './components/split';
import {Steps, Step} from './components/steps';
import {Switch} from './components/switch';
import {Table, TableColumn} from './components/table';
import {Tabs, Tab} from './components/tabs';
import {Tag} from './components/tag';
import {Timeline, TimelineItem} from './components/timeline';
import {Timepicker} from './components/timepicker';
import {Tip} from './components/tip';
import {Tooltip} from './components/tooltip';
import {Transfer} from './components/transfer';
import {Tree} from './components/tree';
import {Upload} from './components/upload';

export {
    Affix,
    App,
    Aside,
    Badge,
    Body,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    CardColumn,
    Carousel,
    CarouselItem,
    Cascader,
    Checkbox,
    Code,
    Col,
    Collapse,
    CollapseItem,
    Datepicker,
    Dialog,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    Layout,
    Link,
    Menu,
    MenuItem,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Rate,
    Row,
    ScrollSelect,
    Search,
    Select,
    Slider,
    Spin,
    Spinner,
    Split,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Timeline,
    TimelineItem,
    Timepicker,
    Tip,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

const components = {
    Affix,
    App,
    Aside,
    Badge,
    Body,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    CardColumn,
    Carousel,
    CarouselItem,
    Cascader,
    Checkbox,
    Code,
    Col,
    Collapse,
    CollapseItem,
    Datepicker,
    Dialog,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Footer,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    Layout,
    Link,
    Menu,
    MenuItem,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Rate,
    Row,
    ScrollSelect,
    Search,
    Select,
    Slider,
    Spin,
    Spinner,
    Split,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tag,
    Timeline,
    TimelineItem,
    Timepicker,
    Tip,
    Tooltip,
    Transfer,
    Tree,
    Upload
};

export const version = '1.0.0-beta.7';

/* generate end */

export default function install(Vue) {
    if (install.installed) return;

    if (Vue) {
        for (let key in components) {
            Vue.component(`K${key}`, components[key]);
            // support call method like this.$message.success('test'), #88
            if (key === 'Message') {
                Vue.prototype.$message = components.Message;
            }
        }
    } else {
        for (let key in components) {
            global[`K${key}`] = components[key];
        }
    }
    install.installed = true;
}

export {_$, localize, install};
