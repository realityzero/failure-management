import { useEffect, useMemo, useRef, useState } from "react";

const Shape = ({data}) => {
    // converted to 1D array
    const boxes = useMemo(() => data.flat(Infinity), [data]);
    const countOfVisibleBoxes = useMemo(() => {
        return boxes.reduce((acc, box) => {
            if (box === 1) {
                acc += 1;
            }
            return acc;
        }, 0)
    }, [boxes]);

    const [selected, setSelected] = useState(new Set());
    const [unloading, setUnloading] = useState(false);
    const timeRef = useRef(null);

    const handleClick = (e) => {
        // index
        // status
        const {target} = e;
        const index = target.getAttribute('data-index');
        const status = target.getAttribute('data-status');

        if (index == null || status === 'hidden' || selected.has(index) || unloading) {
            return;
        }

        setSelected(prev => {
            return new Set(prev.add(index));
        })
    };

    const unload = () => {

        setUnloading(true);

        // remove box every 500ms
        const keys = Array.from(selected.keys());

        const removeNextKey = () => {
            if (keys.length) {
                const currentKey = keys.shift();

                setSelected(prev => {
                    const updatedKeys = new Set(prev);
                    updatedKeys.delete(currentKey);
                    return updatedKeys;
                });

                timeRef.current = setTimeout(removeNextKey, 500);
            } else {
                setUnloading(false);
                clearTimeout(timeRef.current);
            }
        }
        timeRef.current = setTimeout(removeNextKey, 100);
    }

    useEffect(() => {
        // selected.size >= countOfVisibleBoxes
        if (selected.size >= countOfVisibleBoxes) {
            // unloading
            unload();
        }
    }, [selected]);

    return (
        <div onClick={handleClick} style={{padding: '50px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', width: 'fit-content', gap: '20px'}}>
            {boxes.map((box, index) => {
                const status = box === 1 ? 'visible' : 'hidden';
                const cssClass = status === 'visible' ? {
                    border: '1px solid black',
                    cursor: 'pointer',
                } : {
                    opacity: '0',
                    cursor: 'initial',
                }

                const isSelected = selected.has(index.toString());
                const selectedClass = isSelected && {
                    backgroundColor: '#0bcc59',
                    cursor: 'not-allowed',
                };
                return (
                    <div key={`${box}-${index}`} style={{width: '80px', height: '80px', ...cssClass, ...selectedClass}} 
                        data-index={index}
                        data-status={status}
                    />
                )
            })}
        </div>
    )
}

export default Shape;