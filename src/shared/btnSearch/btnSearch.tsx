import { FC } from "react"
import s from './style.module.scss'

import { useAppDispatch, useAppSelector } from "../../service/hooks/hooks";
import { setIsFetchRequest, sortingBooksSelector } from "../../service/slices/sortingBooks/sortingBooks.slice";

import { IoSearchSharp } from "react-icons/io5";


const BtnSearch: FC = () => {

    const { searchValue } = useAppSelector(sortingBooksSelector)
    const dispatch = useAppDispatch()

    const fetchSearch = () => dispatch(setIsFetchRequest())

    const isDisabled = !searchValue ? true : false

    return (

        <button onClick={fetchSearch} disabled={isDisabled} className={s.root}>
            <IoSearchSharp className={s.icon} />
        </button>
    )
}

export default BtnSearch