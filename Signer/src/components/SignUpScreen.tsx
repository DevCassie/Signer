import { IonButton, IonContent, IonGrid, IonRow, IonCol, IonText, IonInput, IonItem } from '@ionic/react';

import './StartupScreen.css';

interface ContainerProps { }

const StartScreen: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <div className="container flex ion-padding">
          <h1><IonText color="light">Welkom</IonText></h1>
          <IonText color="light">Maak je account aan.</IonText>
        <div className="container icon">
          <svg>
            <circle cx="50" cy="50" r="40" stroke="none" stroke-width="0" fill="#FCFF4B"></circle>
          </svg>
        </div>
        <div className="container flex">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="Gebruikersnaam">
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>

              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>

              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </IonContent>
  );
};

export default StartScreen;
