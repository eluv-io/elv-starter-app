import React, { useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { DndContext, closestCenter, TouchSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy, useSortable } from "@dnd-kit/sortable";

const Item = (props) => {
  
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: props.id });

  const animation = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
    {props.handle ? 
        <div ref={setNodeRef} style={animation} className={isDragging ? "-elv-dnd-item-dragging" : "-elv-dnd-item"}>
            <div className="-elv-dnd-item-container">
                <button {...listeners} {...attributes} className="-elv-dnd-item-handle">
                    Drag handle
                </button> 
                <div className="-elv-dnd-item-info">
                    {props.value}
                </div> 
            </div>
        </div> :
        <div ref={setNodeRef} style={animation} className={isDragging ? "-elv-dnd-item-dragging" : "-elv-dnd-item"} {...listeners} {...attributes}>
            <div className="-elv-dnd-item-container">
                <div className="-elv-dnd-item-info">
                    {props.value}
                </div> 
            </div>
        </div>}  
    </>
  );
};

export const DragnDrop = (props) => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(props.items);

  const sensors = useSensors(
    useSensor(TouchSensor)
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    setActiveId(null);
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className="-elv-dnd-container">
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((id) => (
            <Item key={id} id={id} handle={props.handle} value={id} />
          ))}
          {props.overlay ? 
            <DragOverlay>
                {activeId ? (<div className="-elv-dnd-overlay"></div>) : null}
            </DragOverlay> : null}
        </SortableContext>
      </div>
    </DndContext>
  );
};