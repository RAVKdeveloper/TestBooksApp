import { FC } from "react"
import s from './style.module.scss'

import SearchInput from "../../shared/searchInput/input"


const SearchFeatures: FC = () => {

    return (

        <div className={s.root}>
           <SearchInput />
        </div>
    )
}

export default SearchFeatures