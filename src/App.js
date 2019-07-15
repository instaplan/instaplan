import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './routes';

function App() {
  return (

    <div id='wrapper'>
      <Header />

      <main>
        {routes}
      </main>

      <Footer />

  

    </div>
  );
}

export default App;
