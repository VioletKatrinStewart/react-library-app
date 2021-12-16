import BookList from './views/Books/BookList';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
// import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views

  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books" exact component={BookList} />
        </Switch>
        {/* one route just / 
            one route is /books
            one route is /books/:id

            I will need a link to catalog from home page 
            */}
      </BrowserRouter>
    </main>
  );
}

export default App;
