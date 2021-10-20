import { IonHeader, IonPage, IonContent, IonText, IonItem, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonTitle } from '@ionic/react';
import { trophy, chevronForwardOutline } from 'ionicons/icons';
import './Profile.css';
import { auth } from '../firebase';
import Card from '../components/Card';
import Mascot from '../components/Mascot';
import IconInput from '../components/IconInput';

interface Homeprops { };

const Profile: React.FC<Homeprops> = () => {
  const userName = auth.currentUser.displayName;
  const email = auth.currentUser.email;
  return (
    <IonPage>
      <IonHeader className="header ion-padding">
        <IonTitle>
          <div className="header_title">
            <IonText color="light">{userName}</IonText>
            <IonText color="light"><IonIcon icon={trophy} /> Master</IonText>
          </div>
        </IonTitle>
      </IonHeader>
      <IonContent>
        <div className="container page_content ion-padding">
          <div className="container flex align_top">
            <Mascot className="profile_page" />
            <div className="grid">
              <Card className='card_achievement level'>
                <IonText>35</IonText>
                <IonText>Level</IonText>
              </Card>
              <Card className="card_achievement achievements">
                <IonText>20</IonText>
                <IonText>Trophies</IonText>
              </Card>
              <Card className="card_achievement coins">
                <IonText>90</IonText>
                <IonText>Coins</IonText>
              </Card>
            </div>
            <Card className="flex full_width">
              <IonItem>
                <IonLabel>Pas karakter aan <IonIcon icon={chevronForwardOutline} className="align_right"></IonIcon></IonLabel>
              </IonItem>
          </Card>
          <Card className="inlog_gegevens">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IconInput placeholder="Gebruikersnaam" color="light" type="text" iconclassName="fas fa-user" value={userName} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IconInput placeholder="Email" color="light" type="email" iconclassName="fas fa-envelope" value={email} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IconInput placeholder="Wachtwoord" color="light" type="password" iconclassName="fas fa-key" value='password' />
                </IonCol>
              </IonRow>
            </IonGrid>
          </Card>
          </div>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
