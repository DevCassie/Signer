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
      <div className="container flex ion-padding text-align-center">
          <h1><IonText color="light">Welkom</IonText></h1>
          <IonText color="light">Maak je account aan.</IonText>
        <div className="container icon">
          <svg>
            <circle cx="50" cy="50" r="40" stroke="none" stroke-width="0" fill="#FCFF4B"></circle>
          </svg>
        </div>
        <Card>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Gebruikersnaam" color="light" type="text" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Email" color="light" type="email"></IconInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Wachtwoord" color="light" type="password"></IconInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </Card>
        <Button className="button start ion-margin-bottom" size="large" href="" text="Account aanmaken"/>
      </div>
    </IonContent>
  );
};

export default StartScreen;
