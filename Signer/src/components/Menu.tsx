import React from 'react';
import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle } from '@ionic/react';
import { home, person, trophy, settings, logIn } from 'ionicons/icons';

const routes = {
  appPages: [
    { title: 'Home', path: '/tabs/home', icon: home },
    { title: 'Profile', path: '/tabs/profile', icon: person },
    { title: 'Achievements', path: '/tabs/achievements', icon: trophy },
    { title: 'Settings', path: '/tabs/settings', icon: settings }
  ],
  loggedOutPages: [
    { title: 'Login', path: '/login', icon: logIn },
    { title: 'Registreren', path: '/registreren', icon: person }
  ]
};

interface Pages {
  title: string,
  path: string,
  icon: string,
  routerDirection?: string
};

interface MenuProps { };

const Menu: React.FC<MenuProps> = () => {
  function renderlistItems(list: Pages[]) {
    return list
      .filter(route => !!route.path)
      .map(p => (
        <IonMenuToggle key={p.title} auto-hide="false">
          <IonItem detail={false} routerLink={p.path} routerDirection="none" >
            <IonIcon slot="start" icon={p.icon} />
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu type="overlay" contentId="main">
      <IonContent forceOverscroll={false}>
        <IonList lines="none">
          <IonListHeader>Conference</IonListHeader>
          {renderlistItems(routes.appPages)}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;