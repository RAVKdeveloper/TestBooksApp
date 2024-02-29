import React, { FC, memo } from 'react'
import s from './style.module.scss'

import CardEntity from '../../entitys/Card/card'
import Loader from '../../shared/Loader/loader'

import { useLazyGetBooksQuery } from '../../service/api/api' 
import { useAppSelector } from '../../service/hooks/hooks'
import { sortingBooksSelector } from '../../service/slices/sortingBooks/sortingBooks.slice'
import type { IBook } from '../../service/api/types/book.type' 
import { getError } from '../../errors/error.util' 


const CardList: FC = memo(() => {

    const { searchValue, categorieValue, isFetchReq, sortValue } = useAppSelector(sortingBooksSelector)
    const [ page, setPage ] = React.useState<number>(1)
    const [ books, setBooks ] = React.useState<IBook[]>([])
    const [ req, { data, isLoading } ] = useLazyGetBooksQuery()
 
    const changePage = React.useCallback(() => setPage(prev => prev + 1), [])

    const fetchBooks = async () => {
        try{
           
           const obj = {
            page,
            search: searchValue,
            categorie: categorieValue.value,
            order: sortValue.value
           }

           await req(obj).unwrap()

        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        catch (e: any) {
            const error = getError(e.status)
            alert(error)
        }
    }

    React.useEffect(() => {

     setBooks([])
     setPage(1)

    }, [ categorieValue.value, searchValue ])

    React.useEffect(() => {

       if(data && data.items.length > 0) { 
        setBooks(prev => [...prev, ...data.items])
       }

    }, [ data ])

    React.useEffect(() => {

     fetchBooks()

    }, [ isFetchReq, categorieValue.value, sortValue.value, page ])

    if(isLoading) return <Loader />

    if(books.length === 0 && !isLoading) return <div className={s.empty}>К сожалению ничего ненайдено :(</div>

    return (

        <section className={s.root}>
            <p className={s.count}>Найдено: {data?.totalItems}</p>
            <ul className={s.content}>
              {
                  books.map(book => (
                      <CardEntity key={book.id} {...book} />
                  ))
              }
            </ul>
            <p onClick={changePage} className={s.loadingTo}>Загрузить ещё...</p>
        </section>
    )
})

export default CardList