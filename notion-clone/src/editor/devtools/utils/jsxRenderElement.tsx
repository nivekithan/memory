import { RenderElementProps } from "slate-react";
import React, { useState } from "react";
import { BsAlarm, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { Node } from "slate";
export const JsxRenderElement = ({
  attributes,
  children: slateChildren,
  element,
  setSelectedProperties,
}: RenderElementProps & {
  setSelectedProperties: React.Dispatch<React.SetStateAction<Node | null>>;
}) => {
  let { type, devtools_depth } = element;

  const [showChildren, setShowChildren] = useState<boolean>(false);

  const Icon = () => {
    return showChildren ? (
      <span>{<BsArrowDownShort />}</span>
    ) : (
      <span>{<BsArrowUpShort />}</span>
    );
  };

  const onIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setShowChildren((s) => !s);
  };

  const onJsxClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedProperties(element);
  };

  if (typeof type !== "string") {
    type = "normal";
  }

  if (typeof devtools_depth !== "number") {
    devtools_depth = 0;
  }

  return (
    <div
      {...attributes}
      style={{ marginLeft: `${(devtools_depth as number) * 1.5}rem` }}
    >
      <div style={{ display: "flex" }}>
        <span onClick={onIconClick} style={{ cursor: "pointer" }}>
          <Icon />
        </span>
        <span onClick={onJsxClick}>{`<${type} />`}</span>
      </div>

      {showChildren ? slateChildren : null}
    </div>
  );
};