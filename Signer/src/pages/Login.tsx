import { IonContent, IonGrid, IonRow, IonCol, IonText, IonLoading } from '@ionic/react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import Button from '../components/Button';
import IconInput from '../components/IconInput';
import Mascot from '../components/Mascot';
import Card from '../components/Card';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../Auth';
import { auth } from '../firebase';

import './Start.css';
import './SignupPage.css';


interface ContainerProps { }

const LoginPage: React.FC<ContainerProps> = () => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });
  
  const handleLogin = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log(error);
    }
  }

  if (loggedIn) {
    return <Redirect to="/tabs" />;
  }

  return (
    <IonContent>
      <div className="container page_content ion-padding">
        <Mascot />
        <div className="container flex text-align-center">
          <h1><IonText color="light">Welkom terug</IonText></h1>
          <IonText color="light" className="subheading">Log in</IonText>
        <Card>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Email" color="light" type="email" iconclassName="fas fa-envelope" value={email} onIonChange={(event) => setEmail(event.detail.value)} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IconInput placeholder="Wachtwoord" color="light" type="password" iconclassName="fas fa-key" value={password} onIonChange={(event) => setPassword(event.detail.value)} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </Card>
        <Button className="start" size="large" text="Inloggen" onClick={handleLogin} />
      </div>
      </div>
      <IonLoading isOpen={status.loading} />
    </IonContent>
  );
};

export default LoginPage;
