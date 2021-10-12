import { IonContent, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import Button from '../components/Button';
import IconInput from '../components/IconInput';
import Card from '../components/Card';

import './Start.css';
import './SignupScreen.css';

interface ContainerProps { }

const StartScreen: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <div className="container icon">
      </div>
      <div className="container flex ion-padding text-align-center">
          <h1><IonText color="light">Welkom</IonText></h1>
          <IonText color="light" className="subheading">Maak je account aan</IonText>
        <Card>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Gebruikersnaam" color="light" type="text" iconclassName="fas fa-user" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Email" color="light" type="email" iconclassName="fas fa-envelope"></IconInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Wachtwoord" color="light" type="password" iconclassName="fas fa-key"></IconInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </Card>
        <Button className="start ion-margin-bottom" size="large" href="/home" text="Account aanmaken" />
      </div>
    </IonContent>
  );
};

export default StartScreen;
