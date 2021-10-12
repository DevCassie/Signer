import { IonHeader, IonTitle, IonPage, IonContent } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import './Homepage.css';

const Homepage: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <IonPage>
      <IonHeader className="header">
        <IonTitle color="light">John Doe</IonTitle>
      </IonHeader>
      <IonContent>

      </IonContent>
    </IonPage>
  );
};

export default Homepage;
