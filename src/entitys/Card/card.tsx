import { FC } from 'react'
import s from './style.module.scss'

import type { IBook } from '../../service/api/types/book.type' 


const CardEntity: FC<IBook> = ({ volumeInfo, saleInfo, selfLink }) => {

    const image = volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail
    const amount = saleInfo.listPrice && saleInfo.listPrice.amount

    const emptyImage = 'http://books.google.com/books/content?id=zgyQDwAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'

    console.log(saleInfo)

    return (

        <li className={s.root}>
            {
                image &&
                <img src={image ?? emptyImage} alt={volumeInfo.title} className={s.imgCard} />
            }
            <div className={s.column}>
              <a href={selfLink} target='_blank' className={s.title}>{volumeInfo.title}</a>
              <p className={s.author}>{volumeInfo.authors.join(', ')}</p>
              <p className={s.price}>
                {amount ?? 0}
              </p>
            </div>
        </li>
    )
}

export default CardEntity