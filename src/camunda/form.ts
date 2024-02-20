import {FieldValues, Path, PathValue} from "react-hook-form";

export type Keys = { [x: string]: true | undefined; }
export type Key = Path<FieldValues>
export type KeyValue =  PathValue<FieldValues, Key>