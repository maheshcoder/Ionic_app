import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import LogoPage from './pages/LogoPage';
import Home from './pages/Home';
import Details from './pages/Details';
import ProfileEdit from './components/ProfileEdit'; 
import 'leaflet/dist/leaflet.css';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/logo">
          <LogoPage />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/details">
          <Details />
        </Route>

        <Route exact path="/profile-edit">
          <ProfileEdit />
        </Route>

        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
