import { IonButton, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

import './StartupScreen.css';

interface ContainerProps { }

const StartScreen: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <div className="container flex ion-padding">
        <div className="container icon">
          <svg>
            <circle cx="100" cy="100" r="50" stroke="none" stroke-width="0" fill="#FCFF4B"></circle>
          </svg>
        </div>
        <div className="container flex">
          <IonButton className="button start ion-margin-bottom" size="large" href="/login">Inloggen</IonButton>
          <IonButton className="button start" size="large" href="/registreren">Account aanmaken</IonButton>
        </div>  
      </div>
    </IonContent>
  );
};

export default StartScreen;
