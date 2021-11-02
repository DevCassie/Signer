import { IonContent, IonPage, IonTitle, IonHeader, IonToggle, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { chevronForwardOutline, chevronBackOutline } from 'ionicons/icons';
import Card from '../components/Card';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../Auth';

import './Settings.css';

interface ContainerProps { }

const SettingsPage: React.FC<ContainerProps> = () => {
  const { loggedIn } = useAuth();
  const [checked, setChecked] = useState(false);
  const goBack = () => {
    return window.history.back();
  }

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <IonPage>
    <IonHeader className="header ion-padding">
      <div className="grid">
        <div className="header_title settings">
          <IonIcon icon={chevronBackOutline} onClick={goBack} />
          <IonTitle color="light">Instellingen</IonTitle>
        </div>
      </div>
    </IonHeader>
    <IonContent>
      <div className="container page_content ion-padding">
        <div className="container flex align_top">
          <Card className="flex align_top full_width">
              <IonItem>
                <IonLabel color="dark">Meldingen</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Donkere modus</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Instellingen 1</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Instellingen 2</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Instellingen 3</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Instellingen 4</IonLabel>
                <IonToggle checked={checked} onClick={() => setChecked(true)} />
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Help en support <IonIcon icon={chevronForwardOutline} className="align_right"></IonIcon></IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel color="dark">Over <IonIcon size="medium" icon={chevronForwardOutline} className="align_right" slot="end"></IonIcon></IonLabel>
              </IonItem>
          </Card>
        </div>  
      </div>
    </IonContent>
  </IonPage>
  );
};

export default SettingsPage;
