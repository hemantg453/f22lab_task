import './App.css';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import Form from './component/forms/Signup'
import Header from './component/Landing_Page/Header/Header'
import Footer from './component/Landing_Page/Footer/footer'
import Reader from './component/Landing_Page/reader/reader'
import CoveredChapter from './component/Landing_Page/coverdChapter/Cvrd_Chapter'
import Price from './component/Landing_Page/Price_section/price'
import Finalpage from './component/Landing_Page/finalpage'
function App() {
  return (
   
    <BrowserRouter>
    <Switch>
    <Route exact path="/chapters/completed">
        <CoveredChapter></CoveredChapter>
      </Route>
      <Route exact path="/start">
        <Finalpage></Finalpage>
      </Route>
    <Route exact path="/price">
        <Price></Price>
      </Route>
      <Route exact path="/reader">
        <Reader></Reader>
      </Route>
    <Route exact path="/header">
        <Header></Header>
      </Route>
      <Route exact path="/footer">
        <Footer></Footer>
      </Route>
      <Route exact path="/">
        <Form></Form>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
