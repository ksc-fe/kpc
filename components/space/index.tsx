import React, { useContext } from "react";
import classNames from "classnames";
import { ConfigContext, SizeType } from "./configProvider";
import Item from "./Item";
import toArray from "./toArray";
import useFlexGapSupport from "./useFlexGapSupport";
import "./index.scss";

export interface Option {
  keepEmpty?: boolean;
}

export const SpaceContext = React.createContext({
  latestIndex: 0,
  horizontalSize: 0,
  verticalSize: 0,
  supportFlexGap: false,
});

export type SpaceSize = SizeType | number;

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize]; // 间距大小
  direction?: "horizontal" | "vertical"; // 排列方向
  align?: "start" | "end" | "center" | "baseline"; // 对齐方式
  split?: React.ReactNode; // 分隔符
  wrap?: boolean; // 是否自动换行
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

function getNumberSize(size: SpaceSize) {
  return typeof size === "string" ? spaceSize[size] : size || 0;
}
const Space: React.FC<SpaceProps> = (props) => {
  const {
    getPrefixCls,
    space,
    direction: directionConfig,
  } = useContext(ConfigContext);
  const {
    size = space?.size || "small",
    align,
    className,
    children,
    direction = "horizontal",
    split,
    style,
    wrap = false,
    ...otherProps
  } = props;
  const supportFlexGap = useFlexGapSupport();
  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      (
        (Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]
      ).map((item) => getNumberSize(item)),
    [size]
  );
  const childNodes = toArray(children, { keepEmpty: true });
  const mergedAlign =
    align === undefined && direction === "horizontal" ? "center" : align;
  const prefixCls = getPrefixCls("space");
  const cn = classNames(
    prefixCls,
    `${prefixCls}-${direction}`,
    {
      [`${prefixCls}-rtl`]: directionConfig === "rtl",
      [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
    },
    className
  );
  const itemClassName = `${prefixCls}-item`;
  const marginDirection =
    directionConfig === "rtl" ? "marginLeft" : "marginRight";
  // Calculate latest one
  let latestIndex = 0;
  const nodes = childNodes.map((child: any, i) => {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    const key = (child && child.key) || `${itemClassName}-${i}`;
    return (
      <Item
        className={itemClassName}
        key={key}
        direction={direction}
        index={i}
        marginDirection={marginDirection}
        split={split}
        wrap={wrap}
      >
        {child}
      </Item>
    );
  });
  const spaceContext = React.useMemo(
    () => ({ horizontalSize, verticalSize, latestIndex, supportFlexGap }),
    [horizontalSize, verticalSize, latestIndex, supportFlexGap]
  );

  if (childNodes.length === 0) {
    return null;
  }
  const gapStyle: React.CSSProperties = {};

  if (wrap) {
    gapStyle.flexWrap = "wrap";

    if (!supportFlexGap) {
      gapStyle.marginBottom = -verticalSize;
    }
  }

  if (supportFlexGap) {
    gapStyle.columnGap = horizontalSize;
    gapStyle.rowGap = verticalSize;
  }

  return (
    <div
      className={cn}
      style={{
        ...gapStyle,
        ...style,
      }}
      {...otherProps}
    >
      <SpaceContext.Provider value={spaceContext}>
        {nodes}
      </SpaceContext.Provider>
    </div>
  );
};

export default Space;
