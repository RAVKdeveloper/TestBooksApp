import { FC } from 'react'
import s from './style.module.scss'


interface Props {
    isOpen: boolean
    close?: () => void
}


const Overlay: FC<Props> = ({ isOpen, close }) => {

    const setClose = () => close?.()

    const openClass = isOpen ? `${s.root} ${s.open}` : s.root

    return (

        <section onClick={setClose} className={openClass}></section>
    )
}

export default Overlay