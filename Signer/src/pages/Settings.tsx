import { IonContent, IonText, IonLoading } from '@ionic/react';
import { signOut } from '@firebase/auth';
import Button from '../components/Button';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../Auth';
import { auth } from '../firebase';


interface ContainerProps { }

const SettingsPage: React.FC<ContainerProps> = () => {
  const { loggedIn } = useAuth();
  const [status, setStatus] = useState({ loading: false, error: false });
  
  const handleSignout = async () => {
    try {
      if (loggedIn) {
        setStatus({ loading: true, error: false });
        await signOut(auth);
      }
    } catch (error) {
      setStatus({ loading: false, error: true });
      console.log(error);
    }
  }

  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <IonContent>
      <div className="container icon">
      </div>
      <div className="container flex ion-padding text-align-center">
          <h1><IonText color="light">Instellingen</IonText></h1>
          <IonText color="light" className="subheading">Log in</IonText>
        <Button className="start ion-margin-bottom" size="large" text="Uitloggen" onClick={handleSignout} />
      </div>
      <IonLoading isOpen={status.loading} />
    </IonContent>
  );
};

export default SettingsPage;
