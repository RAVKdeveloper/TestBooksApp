import { FC } from 'react' 
import { Provider } from 'react-redux' 

import { store } from './service/store'

import HomePage from './pages/home/home'
import Header from './widgets/header/header'


const App: FC = () => {

  return (
    <>
       <Provider store={store}>
           <Header />
           <HomePage />
       </Provider>
    </>
  )
}

export default App
