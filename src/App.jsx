import './App.css'
import Header from './components/Header'
// import Footer from './components/Footer'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincontainer from './components/Maincontainer'
import Watch from './components/Watch'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [{
    path: "/",
    element: <Maincontainer />
  },
  {
    path: "watch",
    element: <Watch />
  }]

}])

function App() {

  return (
    <Provider store={store}>
      <>
        <Header />
        <RouterProvider router={appRouter} />
        {/* <Footer /> */}
      </>
    </Provider>

  )
}

export default App
