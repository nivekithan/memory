import { Node } from "slate";

import React from "react";
import { Editor } from "./editor";

export const App = () => {
  return (
    <div className="flex text-white-1 ">
      <div className="h-screen w-sidebar max-w-sidebar bg-black-sidebar"></div>
      <div className="flex-1 h-screen bg-black-content">
        <div className="mx-cent20 mt-cent10">
          <Editor defaultValue={defaultValue} />
        </div>
      </div>
    </div>
  );
};

const defaultValue: Node[] = [
  {
    type: "numbered-list",
    number: 3,
    _userDefined: false,
    children: [
      {
        text: "This is numbered list",
      },
    ],
  },
  {
    type: "numbered-list",
    number: 4,
    _userDefined: false,
    children: [
      {
        text: "This is numbered list",
      },
    ],
  },
  {
    type : "numbered-list",
    number : 1,
    _userDefined : true,
    children : [
      {
        text : "It is userDefined"
      }
    ]
  }
 
];
