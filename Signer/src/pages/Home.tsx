import { IonContent, IonPage, } from '@ionic/react';
import StartScreen from '../components/StartupScreen';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage title="Welkom!">
      <IonContent fullscreen>
        <StartScreen />
      </IonContent>
    </IonPage>
  );
};

export default Home;
