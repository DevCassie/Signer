import { IonContent, IonGrid, IonRow, IonCol, IonText, IonLoading } from '@ionic/react';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
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

const SignupPage: React.FC<ContainerProps> = () => {
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({ loading: false, error: false });
  
  const handleRegister = async () => {
    try {
      setStatus({ loading: true, error: false });
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user, {
        displayName: username
      });
      console.log(credential);
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
          <h1><IonText color="light">Welkom</IonText></h1>
          <IonText color="light" className="subheading">Maak je account aan</IonText>
          <Card>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IconInput placeholder="Gebruikersnaam" color="light" type="text" iconclassName="fas fa-user" value={username} onIonChange={(event) => setUsername(event.detail.value)} />
                </IonCol>
              </IonRow>
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
          <Button className="start" size="large" text="Account aanmaken" onClick={handleRegister} />
        </div>
      </div>
      <IonLoading isOpen={status.loading} />
    </IonContent>
  );
};

export default SignupPage;
