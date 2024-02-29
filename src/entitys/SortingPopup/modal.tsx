import { FC } from 'react'
import s from './style.module.scss'

import { useAppDispatch, useAppSelector } from '../../service/hooks/hooks'
import { setIsOpenSortingPopup, sortingBooksSelector, setSortValue, setCategorieValue } from '../../service/slices/sortingBooks/sortingBooks.slice'
import { arrCategories, arrSorting } from '../../assets/db/db'

import { IoMdClose } from "react-icons/io";


const SortingPopupEntity: FC = () => {

    const { isOpenSortingPopup, sortValue, categorieValue } = useAppSelector(sortingBooksSelector)
    const dispatch = useAppDispatch()

    const closePopup = () => dispatch(setIsOpenSortingPopup(false))

    const changeSortValue = (preview: string, value: string) => {
        dispatch(setSortValue({ preview, value }))
        closePopup()
    }

    const changeCategorieValue = (preview: string, value: string) => {
        dispatch(setCategorieValue({ preview, value }))
        closePopup()
    }

    const isOpen = isOpenSortingPopup ? `${s.root} ${s.open}` : s.root

    return (

        <section className={isOpen}>
           <div className={s.titleRow}>
              <h4 className={s.title}>Каталог</h4>
              <IoMdClose onClick={closePopup} className={s.close} />
           </div>
           <ul className={s.list}>
            {
                arrCategories.map(({ id, preview, value }) => (
                    <li 
                     key={id} 
                     className={categorieValue.value === value ? `${s.sort} ${s.active}` : s.sort}
                     onClick={() => changeCategorieValue(preview, value)}
                     >
                     {preview}
                    </li>
                ))
            }
           </ul>
           <div className={s.sortSection}>
            <p className={s.sortTitle}>Сортировка</p>
            <ul className={s.list}>
             {
                arrSorting.map(({ id, preview, value }) => (
                    <li 
                    key={id} 
                    className={sortValue.value === value ? `${s.sort} ${s.active}` : s.sort}
                    onClick={() => changeSortValue(preview, value)}
                    >
                    {preview}
                   </li>
                ))
             }
            </ul>
           </div>
        </section>
    )
}

export default SortingPopupEntity 