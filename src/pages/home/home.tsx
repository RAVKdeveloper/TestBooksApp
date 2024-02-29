import { FC } from "react"; 

import CardList from "../../features/CardList/cardList";


const HomePage: FC = () => {

    return (

        <main>
            <div className="container">
            <CardList />
            </div>
        </main>
    )
} 

export default HomePage