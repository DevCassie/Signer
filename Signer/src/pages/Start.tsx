import { IonContent } from '@ionic/react';
import Button from '../components/Button';
import Mascot from '../components/Mascot';
import './Start.css';

const Start: React.FC = () => {
  return (
      <IonContent>
        <div className="container page_content ion-padding">
          <Mascot />
          <div className="container flex">
            <Button className="start ion-margin-bottom" size="large" href="/login" text="Inloggen" />
            <Button className="start" size="large" href="/registreren" text="Account aanmaken" />
          </div>  
        </div>
      </IonContent>
  );
};

export default Start;
