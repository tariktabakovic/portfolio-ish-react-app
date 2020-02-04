import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Nav from './Nav';


const content = "fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljk fasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljkfasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljkfasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj"
const headerContent = 'Amazing Web Developer';
const linkNames = [
  'Home',
  'Portfolio',
  'Contact'
];

function App() {
  return (
    <div className= 'container-fluid'>
      <Header headerContent= {headerContent}/>
      <Nav linkNames = {linkNames}/>
      <Body content= {content}/>
      <Footer />
    </div>
  );
}

export default App;
