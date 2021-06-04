import {useState} from 'react';

export const useLocalStorage = (key, INITIAL_VALUE) =>  {
    const [state, setstate] = useState(()=>{
        const storage = localStorage.getItem(key);      //Storagetan veri getirilir
        return storage ? JSON.parse(storage) : INITIAL_VALUE; //Storage bos ise initial value atanir
    })

    const updateStorage = value => {
        localStorage.setItem(key, JSON.stringify(value)); //Ls'e atanir
        setstate(value)
    }

    return [state, updateStorage];
}