import React from 'react';
import './App.css';
import CakeContainer from './CakeContainer';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import HookCakeContainer from './HookCakeContainer';
import IcecreamContainer from './IcecreamContainer';
import HookIcecreamContainer from './HookIcecreamContainer';
import NewCakeContainer from './NewCakeContainer';
import Items from './Redux/Items';
import UserContainer from './UserContainer';

function App() {
  return ( 
    <Provider store={Store}>
       <div className="App">
         {/* <Items cake/>
         <Items/>
         <CakeContainer/>
         <HookCakeContainer/>
         <IcecreamContainer/>
         <HookIcecreamContainer/>
         <NewCakeContainer/> */}
         <UserContainer/>
       </div>
    </Provider>
   
  );
}

export default App;
