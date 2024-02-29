import { FC } from 'react'
import s from './style.module.scss'


interface Props {
    open: () => void 
}


const BtnSorting: FC<Props> = ({ open }) => {

    const openPopup = () => open?.()

    return (

        <button onClick={openPopup} className={s.root}>
            Каталог
        </button>
    )
}

export default BtnSorting