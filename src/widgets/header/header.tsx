import { FC } from 'react'
import s from './style.module.scss'

import SearchFeatures from '../../features/Search/search'
import SortingFeatures from '../../features/Sorting/sorting'


const Header: FC = () => {

    return (

        <header className={s.root}>
            <SortingFeatures />
            <SearchFeatures />
        </header>
    )
}

export default Header