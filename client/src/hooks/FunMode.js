
import React, { useEffect} from 'react';
import { useLocalStorage} from './useLocalStorage';

const useFunMode = () => {
    const [value, setValue] = useLocalStorage('fun-mode', false);

    useEffect(()=> {
        if(value === true ){
            document.body.classList.add('fun-mode')
        }else {
            document.body.classList.remove('fun-mode')
        }

    }, [value])

    const handleClick = e => {
        e.preventDefault();
        setValue(!value);
    }

    return [value, handleClick]
}

export default useFunMode;