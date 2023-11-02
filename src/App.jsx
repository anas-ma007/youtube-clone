import './App.css'
import Header from './components/Header'
// import Footer from './components/Footer'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {

  return (
    <Provider store={store}>
      <>
        <Header />
        <Body />
        {/* <Footer /> */}
      </>
    </Provider>

  )
}

export default App
