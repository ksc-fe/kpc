import React from "react";

export type DirectionType = "ltr" | "rtl" | undefined;

export type SizeType = "small" | "middle" | "large" | undefined;

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string) => string;
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
}

export const defaultGetPrefixCls = (suffixCls?: string) => {
  return suffixCls ? `auge-${suffixCls}` : "auge";
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});
