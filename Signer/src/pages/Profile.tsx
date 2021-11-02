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
      <IonContent>
        <div className="container page_content">
          <div className="container flex align_top align_center">
            <div className="header_title no_mascot background_purple ion-padding">
              <IonTitle color="light">{userName}</IonTitle>
              <IonText color="light" className="secondary_font_family"><IonIcon icon={trophy} className="small" /> Master</IonText>
            </div>
            <Mascot className="profile_page" />
            <div className="ion-padding no_padding_top">
              <div className="grid">
                <Card className='card_achievement level'>
                  <IonText class="accent">35</IonText>
                  <IonText color="dark">Level</IonText>
                </Card>
                <Card className="card_achievement achievements">
                  <IonText class="accent">20</IonText>
                  <IonText color="dark">Trophies</IonText>
                </Card>
                <Card className="card_achievement coins">
                  <IonText class="accent">90</IonText>
                  <IonText color="dark">Coins</IonText>
                </Card>
              </div>
              <Card className="flex full_width">
                <IonItem>
                  <IonLabel color="dark">Pas karakter aan <IonIcon icon={chevronForwardOutline} color="dark" className="align_right"></IonIcon></IonLabel>
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
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
