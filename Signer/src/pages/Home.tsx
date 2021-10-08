import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonText } from '@ionic/react';
import Homepage from '../components/Homepage';

const Home: React.FC = () => {
  return (
    <IonPage title="Welkom!">
      <IonHeader>
          <IonToolbar slot="start">
            <IonButtons>
                <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle><IonText color="light">John Doe</IonText></IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Homepage />
      </IonContent>
    </IonPage>
  );
};

export default Home;
