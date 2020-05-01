import React from 'react';
import Referrer from './Components/Referrer/Referrer';
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './routes';

function App() {
  return (
    <div id='wrapper'>
      { document.referrer === 'https://www.esellors.com/' ? <Referrer /> : null }
      <Header />

      <main className='main'>
        {routes}
      </main>

      <Footer />

    </div>
  );
}

export default App;
