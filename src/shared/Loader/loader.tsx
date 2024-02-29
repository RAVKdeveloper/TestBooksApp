import { FC } from 'react'
import s from './style.module.scss'


const Loader: FC = () => {

    return (

        <div className={s.loaderBody}>
            <div className={s.loader}></div>
        </div>
    )
}

export default Loader