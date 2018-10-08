import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// LOCAL IMPORTS

console.log('App Running!');

const AddExpensePage = () => (
  <div>
    This is from my Add Expense component
  </div> 
);

const EditExpensePage = () => (
  <div>
    This is from my Edit Expense component
  </div>
);

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div> 
);

const HelpPage = () => (
  <div>
    This is from my Help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Home</Link>
  </div>
);

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="selected" exat={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="selected">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="selected">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="selected">Help</NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div> 
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
