import { FC } from "react"
import s from './style.module.scss'

import SearchInput from "../../shared/searchInput/input"
import BtnSearch from "../../shared/btnSearch/btnSearch"


const SearchFeatures: FC = () => {

    return (

        <div className={s.root}>
           <SearchInput />
           <BtnSearch />
        </div>
    )
}

export default SearchFeatures