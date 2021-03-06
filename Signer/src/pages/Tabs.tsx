import { Route, Redirect } from 'react-router-dom';
import { home, trophy, person, settings } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet } from '@ionic/react';
import './Tabs.css';
import Homepage from './Homepage';
import Profilepage from './Profile';
import SettingsPage from './Settings';
import Achievementspage from './Achievements';
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
          <Route path="/tabs/home" render={() => <Homepage />} />
          <Route path="/tabs/profiel" render={() => <Profilepage />} />
          <Route path="/tabs/achievements" render={() => <Achievementspage/>} />
          <Route path="/tabs/instellingen" render={() => <SettingsPage />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="tabs" color="secondary">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={home}></IonIcon>
          {/* <IonLabel color="dark">Home</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="profiel" href="/tabs/profiel">
          <IonIcon icon={person}></IonIcon>
          {/* <IonLabel color="dark">Profiel</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="achievements" href="/tabs/achievements">
          <IonIcon icon={trophy}></IonIcon>
          {/* <IonLabel color="dark">Achievements</IonLabel> */}
        </IonTabButton>
        <IonTabButton tab="settings" href="/tabs/instellingen">
          <IonIcon icon={settings}></IonIcon>
          {/* <IonLabel color="dark">Instellingen</IonLabel> */}
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs;
