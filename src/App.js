import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Router>
  )
}

export default App
