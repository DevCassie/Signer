import { Route } from 'react-router-dom';
import { Component } from 'react';
import { home, trophy, person, settings } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonRouterOutlet } from '@ionic/react';
import './Tabs.css';
import Homepage from '../components/Homepage';
import Profilepage from '../components/Profile';

class Tabs extends Component {
  state = {
    isActive: false
  };

  setActive = () => {
    this.setState({ isActive: true });
  }

  render() {
    const isActive = this.state.isActive;
    return <IonPage>
    <IonTabs>
      <IonRouterOutlet id="tabs">
        <Route path="/:tab(home)" render={(props) => <Homepage {...props} />} component={Homepage} />
        <Route path="/:tab(profile)" render={(props) => <Profilepage {...props} /> } component={Profilepage} />
        <Route path="/achievements" />
        <Route path="/settings" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="tabs" color="secondary">
        <IonTabButton tab="home" href="/home" className={ isActive === true ? 'active' : undefined } >
          <IonIcon icon={home} color="dark"></IonIcon>
          <IonLabel color="dark">Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={person} color="dark"></IonIcon>
          <IonLabel color="dark">Profile</IonLabel>
        </IonTabButton>
        <IonTabButton tab="achievements" href="/achievements">
          <IonIcon icon={trophy} color="dark"></IonIcon>
          <IonLabel color="dark">Achievements</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings">
          <IonIcon icon={settings} color="dark"></IonIcon>
          <IonLabel color="dark">Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
  }
}

export default Tabs;
