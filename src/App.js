import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div>
    <Home />
    <Switch>
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route exact path="/random-path" component={NotFound} />
    </Switch>
  </div>
)
export default App
