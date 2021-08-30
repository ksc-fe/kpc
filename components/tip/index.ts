import {Component, TypeDefs} from 'intact';
import template from './index.vdt';
import {Colors} from '../types';
import {bind} from '../utils';

interface TipProps {
	type?: Colors
	disabled?: boolean
	closable?: boolean
	show?: boolean
}

const typeDefs: Required<TypeDefs<TipProps>> = {
	type: ['default', 'primary', 'warning', 'danger', 'success'],
	disabled: Boolean,
	closable: Boolean,
	show: Boolean
};

const defaults = (): Partial<TipProps> => ({
	type: 'default',
	disabled: false,
	closable: false,
	show: true
});

export default class Tip<T extends TipProps = TipProps> extends Component<T> {
	static template = template;
	static typeDefs = typeDefs;
	static defaults = defaults;

	@bind
	private handleCloseClick(e: MouseEvent): void {
		e.stopPropagation();
		this.set('show', false);
		this.trigger('close', e);
	}
}