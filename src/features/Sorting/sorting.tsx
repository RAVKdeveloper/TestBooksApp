import { FC } from "react"

import BtnSorting from "../../shared/btnSorting/btnSorting"
import Overlay from "../../shared/Overlay/overlay"
import SortingPopupEntity from "../../entitys/SortingPopup/modal"

import { useAppDispatch, useAppSelector } from "../../service/hooks/hooks"
import { setIsOpenSortingPopup, sortingBooksSelector } from "../../service/slices/sortingBooks/sortingBooks.slice"


const SortingFeatures: FC = () => {

    const { isOpenSortingPopup } = useAppSelector(sortingBooksSelector)
    const dispatch = useAppDispatch()

    const closePopup = () => dispatch(setIsOpenSortingPopup(false))

    const openPopup = () => dispatch(setIsOpenSortingPopup(true))

    return (

        <section>
           <BtnSorting open={openPopup} />
           <Overlay isOpen={isOpenSortingPopup} close={closePopup} />
           <SortingPopupEntity />
        </section>
    )
}

export default SortingFeatures