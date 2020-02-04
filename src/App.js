import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Nav from './Nav';


const content = "fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljk fasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljkfasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj fdsafa dasfa fdasf fasdfokosdf oadskfaosdf ladsfkjsaljkfasdlfkjdsklf lfksjdaflksjdf fjdaslkfjslkjdf laksdfjlkfj"
const headerContent = 'Amazing Web Developer';
function App() {
  return (
    <React.Fragment>
      <Header headerContent= {headerContent}/>
      <Nav/>
      <Body content= {content}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
