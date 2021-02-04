import { Node } from "slate";
import {nanoid} from "nanoid"
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

const id = "nanoid()"


const defaultValue: Node[] = [
  {
    type : "numbered-list",
    number: 3,
    _startId : id,
    _id : id,
    _userDefined : true,
    children : [
      {
        text : "It is a numbered-list"
      }
    ]
  }
 
];
