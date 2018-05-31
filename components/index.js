import {_$, localize} from './utils';

/* generate start */

import {App} from './app';
import {Breadcrumb, BreadcrumbItem} from './breadcrumb';
import {Button, ButtonGroup} from './button';
import {Checkbox} from './checkbox';
import {Datepicker} from './datepicker';
import {Dialog} from './dialog';
import {Dropdown, DropdownMenu, DropdownItem} from './dropdown';
import {Editable} from './editable';
import {Form, FormItem} from './form';
import {Input} from './input';
import {Link} from './link';
import {Message} from './message';
import {MoveWrapper} from './moveWrapper';
import {Pagination} from './pagination';
import {Progress} from './progress';
import {Radio} from './radio';
import {Row, Col} from './grid';
import {ScrollSelect} from './scrollSelect';
import {Select, Option, OptionGroup} from './select';
import {Slider} from './slider';
import {Spinner} from './spinner';
import {Steps, Step} from './steps';
import {Switch} from './switch';
import {Table, TableColumn} from './table';
import {Tabs, Tab} from './tabs';
import {Tooltip} from './tooltip';
import {Transfer} from './transfer';

export {
    App,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Checkbox,
    Col,
    Datepicker,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Editable,
    Form,
    FormItem,
    Input,
    Link,
    Message,
    MoveWrapper,
    Option,
    OptionGroup,
    Pagination,
    Progress,
    Radio,
    Row,
    ScrollSelect,
    Select,
    Slider,
    Spinner,
    Step,
    Steps,
    Switch,
    Tab,
    Table,
    TableColumn,
    Tabs,
    Tooltip,
    Transfer
};

export const version = '0.3.0';

/* generate end */

export function install(Vue) {
    if (install.installed) return;

    if (Vue) {
        for (let key in exports) {
            const code = key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (code >= 65 && code <= 90) {
                Vue.component(key, exports[key]);
            }
        }
    } else {
        for (let key in exports) {
            const code = key.charCodeAt(0);
            // the key which the first char is uppercase is a component
            if (code >= 65 && code <= 90) {
                global[`K${key}`] = exports[key];
            }
        }
    }
}

export {_$, localize};
