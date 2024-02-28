import { FC } from 'react'
import s from './style.module.scss'

import SearchFeatures from '../../features/Search/search'


const Header: FC = () => {

    return (

        <header className={s.root}>
            <SearchFeatures />
        </header>
    )
}

export default Header