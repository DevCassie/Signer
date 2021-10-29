import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Start from './pages/Start';
import Tabs from './pages/Tabs';
import SignUpPage from './pages/SignupPage';
import { AuthContext, useAuthInit } from './Auth';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './App.css';

const App: React.FC = () => {
  const { loading, auth } =  useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }
  console.log(`rendering App with auth:`, auth);

  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Switch>
            <Route path="/" exact={true}>
              <Start />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/registreren" exact={true}>
              <SignUpPage />
            </Route>
            <Route path="/tabs" >
              <Tabs />
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
  </IonApp>
  )
};

export default App;
