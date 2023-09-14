/** @format */

import { Component, TypeDefs } from 'intact';
import template from './index.vdt';
import { bind } from '../utils';
import { useCopy } from './useCopy';

export interface CopyProps {
  text: string;
  icon?: boolean;
}

const typeDefs: Required<TypeDefs<CopyProps>> = {
  text: String,
  icon: Boolean,
};

const defaults = (): Partial<CopyProps> => ({});

export class Copy extends Component<CopyProps> {
  static template = template;
  static typeDefs = typeDefs;
  static defaults = defaults;

  private copy = useCopy(this.get('text'))

  @bind
  private onClick(e: MouseEvent) {
    this.copy.startCopy()
  }
}
