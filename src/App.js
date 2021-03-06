import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Bookshelves from './components/Bookshelves'
import ProtectedRoute from './components/ProtectedRoute'
import BookDetails from './components/BookDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/shelf" component={Bookshelves} />
        <ProtectedRoute exact path="/books/:id" component={BookDetails} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
