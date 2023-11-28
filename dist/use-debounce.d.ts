/// <reference types="react" />
export declare const useDebounce: <ParamType extends unknown[]>(callback: (...params: ParamType) => void, time: number) => (boolean | import("react").Dispatch<import("react").SetStateAction<boolean>>)[];
