import { IonHeader, IonTitle, IonPage, IonContent } from '@ionic/react';
import './Homepage.css';

interface ProfileProps { };

const Profilepage: React.FC<ProfileProps> = () => {
  return (
    <IonPage show-tabs>
      <IonHeader className="header">
        <IonTitle color="light">Profiel</IonTitle>
      </IonHeader>
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Profilepage;
