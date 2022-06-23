import React from "react";
import { DragnDrop } from "./DragnDrop";
import { Action, EditableField, FileBrowser, IconButton, IconLink, ImageIcon, RadioSelect, Slider } from "elv-components-js";
import icon from "../static/icons/favicon.png";

const Components = () => {

  const items = [ "0","1","2","3","4","5","6"]
  const objects = {one: 'one.jpg', two: 'two.jpg', three: 'three.jpg'};
  return (
    <div>
      <div className="container">
        <h1>Drag and Drop</h1>
        <DragnDrop overlay={false} handle={false} items={items}/>
      </div>
      <div className="container">
        <h1>Action</h1>
        <Action title="Submit" type="button" to="https://live.eluv.io/" disabled={false} hidden={false} children={items} />
      </div>
      <div className="container">
        <h1>Editable Field</h1>
        <EditableField children={(<div></div>)} type="textarea" truncate={true} lines={10} onChange={(e) => console.log(e)}/>
      </div>
      <div className="container">
        <h1>Slider</h1>
        <Slider min={0} max={10} value={5} />
      </div>
      <div className="container">
        <h1>File Browser</h1>
        {/* <FileBrowser header="Documents" baseFileUrl='https://live.eluv.io/' submit={(e) => console.log(e, 'submit')} cancel={(e) => console.log(e, 'cancel')}/> */}
      </div>
      <div className="container">
        <h1>Radio select</h1>
        {/* <RadioSelect name='selection' inline={false} options={[1,2,3,4,5]} onChange={(e) => console.log(e)}/> */}
      </div>
      <div className="container">
        <h1>Icons</h1>
        <ImageIcon icon={icon} />
        <IconButton icon={icon} />
        <IconLink icon={icon} to="https://live.eluv.io/" />
      </div>
      
    </div>
  );
};

export default Components;
