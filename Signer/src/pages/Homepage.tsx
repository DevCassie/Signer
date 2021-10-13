import { IonHeader, IonTitle, IonPage, IonContent, IonText } from '@ionic/react';
import './Homepage.css';
import { auth } from '../firebase';

interface Homeprops { };

const Homepage: React.FC<Homeprops> = () => {
  const userName = auth.currentUser.displayName;
  return (
    <IonPage>
      <IonHeader className="header">
        <IonTitle color="light">{userName}</IonTitle>
      </IonHeader>
      <IonContent>
        <IonText color="light">Heyyy</IonText>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
