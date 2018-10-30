import {useState} from "react";

export function useInput(placeholder) {
    const [value, setValue] = useState('');
    return {
        value, onChange: e => {
            setValue(e.target.value);
        }, placeholder
    };
}