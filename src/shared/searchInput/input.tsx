import React, { FC } from "react"; 
import debounce from 'lodash.debounce'
import s from './style.module.scss'

import { useAppDispatch } from "../../service/hooks/hooks";
import { setSearchValue, setIsFetchRequest } from "../../service/slices/sortingBooks/sortingBooks.slice";

import { IoMdClose } from "react-icons/io";


const SearchInput: FC = () => {

    const [ value, setValue ] = React.useState<string>('')
    const dispatch = useAppDispatch()

    const getSearchValue = React.useCallback(
        debounce((str: string) => dispatch(setSearchValue(str)), 700),
        []
    )
 
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        getSearchValue(e.target.value)
    }

    const removeValue = () => {
        setValue('')
        dispatch(setSearchValue(''))
    }

    const fetchSearchKeyBoard = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') dispatch(setIsFetchRequest())
    } 

    return (
    
        <div className={s.root}>
            <input type="text" 
             className={s.input}
             placeholder='Найти книгу'
             value={value}
             onChange={changeInput}
             onKeyPress={fetchSearchKeyBoard}
            />
            {
                value &&
                <IoMdClose className={s.remove} onClick={removeValue} />
            }
        </div>
    )
} 

export default SearchInput