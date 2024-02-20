import {KeyValuePair, ResolvableTo} from "tailwindcss/types/config";

export const generateGrid = (size: number) => {
    const gridColumn: ResolvableTo<KeyValuePair> = {};
    const gridTemplateColumns: ResolvableTo<KeyValuePair> = {};
    const gridRow: ResolvableTo<KeyValuePair> = {};
    const gridTemplateRows: ResolvableTo<KeyValuePair> = {};
    const gridRowStart: ResolvableTo<KeyValuePair> = {};
    const gridRowEnd: ResolvableTo<KeyValuePair> = {};
    const gridColumnStart: ResolvableTo<KeyValuePair> = {};
    const gridColumnEnd: ResolvableTo<KeyValuePair> = {};
    for (let i = 1; i <= size; i++) {
        gridRow[`span-${i}`] = `span ${i} / span ${i}`;
        gridColumn[`span-${i}`] = `span ${i} / span ${i}`;
        gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`;
        gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`;
        gridRowStart[i] = `${i}`;
        gridRowEnd[i] = `${i}`;
        gridColumnStart[i] = `${i}`;
        gridColumnEnd[i] = `${i}`;
    }
    return {
        gridColumn,
        gridTemplateColumns,
        gridRow,
        gridTemplateRows,
        gridRowStart,
        gridRowEnd,
        gridColumnStart,
        gridColumnEnd,
    };
}