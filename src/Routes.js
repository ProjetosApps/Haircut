import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/home';
import Drawer from './components/drawer';
import Agendar from './components/agendar';
import Login from './components/form/login';
import Signin from './components/form/signin';
import Historico from './components/historico';

export default props => {
  return(
    <Router>
      <Scene key='root' >
    
        <Scene key='Login' component={Login} hideNavBar/>
        <Scene key='Signin' component={Signin} hideNavBar/>
        
        <Scene key="Drawer" drawer contentComponent={Drawer} hideNavBar>
    
          <Scene key="Historico" component={Historico} hideNavBar />
          <Scene key="Home" component={Home} hideNavBar />
          <Scene key="Agendar" component={Agendar} hideNavBar />
    
        </Scene>
    
      </Scene>
    </Router>
  );
}



