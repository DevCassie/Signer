import { Route, Redirect } from 'react-router-dom';
import { home, trophy, person, settings } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import './Tabs.css';
import Homepage from './Homepage';
import Profilepage from './Profile';
import SettingsPage from './Settings';
import { useAuth } from '../Auth';

const Tabs: React.FC = () => {
  const { loggedIn } = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <IonTabs>
      <IonRouterOutlet>
          <Redirect from="/tabs" to="/tabs/home" />
          <Route path="/tabs/home">
            <Homepage />
          </Route>
          <Route path="/tabs/profiel" render={() => <Profilepage />} />
          <Route path="/tabs/achievements" />
          <Route path="/tabs/instellingen" render={() => <SettingsPage />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="tabs" color="secondary">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home} color="dark"></IonIcon>
          <IonLabel color="dark">Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profiel" href="/tabs/profiel">
          <IonIcon icon={person} color="dark"></IonIcon>
          <IonLabel color="dark">Profiel</IonLabel>
        </IonTabButton>
        <IonTabButton tab="achievements" href="/tabs/achievements">
          <IonIcon icon={trophy} color="dark"></IonIcon>
          <IonLabel color="dark">Achievements</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/tabs/instellingen">
          <IonIcon icon={settings} color="dark"></IonIcon>
          <IonLabel color="dark">Instellingen</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs;
