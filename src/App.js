/* eslint-disable jsx-a11y/alt-text */
import logo from './NewTux.svg';
import './App.css';
import { Suspense, lazy } from 'react'

//import Slogan from './code-splitting/Slogan';
//import Rodape from './code-splitting/Rodape';

const Slogan = lazy(() => import('./code-splitting/Slogan'));
const Rodape = lazy(() => import('./code-splitting/Rodape'));
const Binario = lazy(() => import('./code-splitting/Binario'));


export default function App() {
    return (
    <>    
    <div className="App">
      <header className="App-header">
      <div className="logo">
      <img src={logo} className="App-logo" alt="logo" />
      
      </div>
        

        <Suspense fallback={ <img src="https://media.tenor.com/images/b7ac6aa7c44b930859dc0c1cd4f026bb/tenor.gif" /> } > 
        
        <Binario/>               
          
        </Suspense>        

        <Suspense fallback={ <img src="https://c.tenor.com/Vfd6WUimbGoAAAAj/river-city-girls-rcg.gif" /> } > 
          <Slogan /> 
          
        </Suspense>

        <Suspense fallback={ <p>Carregando...</p> }> 
          <Rodape /> 
          
        </Suspense>

      </header>
    </div>
    </>
  );
}

 

    
  



