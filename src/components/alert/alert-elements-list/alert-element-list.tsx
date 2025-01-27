import { DragDropContext, DropResult, Droppable, Draggable } from '@hello-pangea/dnd';
import { Duration } from '~/components/alert/duration/duration';
import { Timeline } from '~/components/alert/timeline/timeline';
import { Button, ButtonColor, ButtonSize } from '~/components/button/button';
import { Color } from '~/components/forms/color/color';
import { timeToPixel } from '~/utils/timeline/time-converter';
import type { AlertElements } from '~/types/schemas/alert';
import type { Milliseconds } from '~/types/types/custom';

export interface AlertElementsListProps {
  elements: AlertElements;
  totalTime: Milliseconds;
  onDeleteElement?: (id: string) => void;
  onColorChange?: (id: string, color: string) => void;
  onStartChange?: (id: string, startTime: Milliseconds) => void;
  onDurationChange?: (id: string, duration: Milliseconds) => void;
  onOrderChange?: (elements: AlertElements) => void;
  onElementClick?: (id: string) => void;
  onTimestampChange?: (timestamp: Milliseconds) => void;
}

export const AlertElementsList = (props: AlertElementsListProps) => {
  const {
    elements,
    totalTime,
    onDeleteElement,
    onColorChange,
    onDurationChange,
    onStartChange,
    onOrderChange,
    onElementClick,
    onTimestampChange,
  } = props;

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const currentList = [...elements];
    const elementToMove = currentList[source.index];
    currentList.splice(source.index, 1);
    currentList.splice(destination.index, 0, elementToMove);
    onOrderChange && onOrderChange(currentList);
  };

  return (
    <div className="custom-scrollbar h-[300px] w-full overflow-y-auto rounded-xl bg-dark-600">
      <div>
        <Duration
          totalTime={totalTime}
          onTimestampChange={(timestamp) => onTimestampChange?.(timestamp)}
        />
      </div>
      <DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result)}>
        <Droppable droppableId="list">
          {(providedDroppable) => (
            <div
              className="flex flex-col gap-1"
              ref={providedDroppable.innerRef}
              {...providedDroppable.droppableProps}
            >
              <>
                {[...elements].reverse().map((element, index) => (
                  <Draggable draggableId={element.id} index={index} key={element.id}>
                    {(providedDraggable) => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                        className="flex items-center gap-2 border-b border-dark-400 py-2 pl-4"
                        style={{ width: timeToPixel(totalTime) + 171 + 'px' }}
                      >
                        <div className="flex h-12 items-center gap-2">
                          <Button
                            buttonIcon="delete-bin-line"
                            color={ButtonColor.Error}
                            size={ButtonSize.Small}
                            onClick={() => onDeleteElement && onDeleteElement(element.id)}
                          />
                          <Button
                            buttonIcon="menu-5-line"
                            color={ButtonColor.Dark}
                            size={ButtonSize.Small}
                            type="button"
                          />
                          <Color
                            haveInput={false}
                            value={element.color}
                            onColorChange={(value) =>
                              onColorChange && onColorChange(element.id, value)
                            }
                          />
                        </div>
                        <Timeline
                          type={element.type}
                          id={element.id}
                          title={element.title}
                          totalTime={totalTime}
                          color={element.color}
                          duration={element.duration as Milliseconds}
                          startTime={element.start_time as Milliseconds}
                          onElementMove={(startTime) =>
                            onStartChange && onStartChange(element.id, startTime)
                          }
                          onElementResize={(duration) =>
                            onDurationChange && onDurationChange(element.id, duration)
                          }
                          onClick={() => onElementClick && onElementClick(element.id)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </>
              {providedDroppable.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
