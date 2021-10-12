import { IonHeader, IonTitle, IonPage, IonContent, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import './Homepage.css';

const Profilepage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <IonPage>
      <IonHeader className="header">
        <IonTitle color="light">Profile</IonTitle>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Profilepage;
