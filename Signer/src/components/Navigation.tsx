import { home, trophy, person, settings } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';

import './Navigation.css';

function Navigation(props: any) {
    return (
        <IonTabBar>
        <IonTabs>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home">
                    <IonIcon icon={home}></IonIcon>
                    <IonLabel>Home</IonLabel>
                    <IonBadge>0</IonBadge>
                </IonTabButton>
                <IonTabButton tab="profile">
                    <IonIcon icon={person}></IonIcon>
                    <IonLabel>Profile</IonLabel>
                    <IonBadge>1</IonBadge>
                </IonTabButton>
                <IonTabButton tab="achievements">
                    <IonIcon icon={trophy}></IonIcon>
                    <IonLabel>Achievements</IonLabel>
                    <IonBadge>2</IonBadge>
                </IonTabButton>
                <IonTabButton tab="Settings">
                    <IonIcon icon={settings}></IonIcon>
                    <IonLabel>Settings</IonLabel>
                    <IonBadge>3</IonBadge>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
        </IonTabBar>
    )
}

export default Navigation;
