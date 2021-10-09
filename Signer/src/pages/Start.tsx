import { IonContent, IonPage } from '@ionic/react';
import Button from '../components/Button';
import './Start.css';

const Start: React.FC = () => {
  return (
    <IonPage title="Welkom!">
      <IonContent fullscreen>
        <div className="container flex ion-padding">
          <div className="container icon">
            <svg>
              <circle cx="100" cy="100" r="50" stroke="none" stroke-width="0" fill="#FCFF4B"></circle>
            </svg>
          </div>
          <div className="container flex">
            <Button className="start ion-margin-bottom" size="large" href="/login" text="Inloggen" />
            <Button className="start" size="large" href="/registreren" text="Account aanmaken" />
          </div>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Start;
