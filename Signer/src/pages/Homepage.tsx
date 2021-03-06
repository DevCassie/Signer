/* eslint-disable jsx-a11y/anchor-is-valid */
import { IonHeader, IonTitle, IonPage, IonContent, IonText, IonIcon } from '@ionic/react';
import { trophy } from 'ionicons/icons';
import './Homepage.css';
import { auth } from '../firebase';
import Card from '../components/Card';
import Mascot from '../components/Mascot';

interface Homeprops { };

const Homepage: React.FC<Homeprops> = () => {
  const userName = auth.currentUser.displayName;
  return (
    <IonPage>
      <IonHeader className="header ion-padding">
        <div className="grid">
          <Mascot className="header_small" />
          <div className="header_title">
            <IonTitle color="light">{userName}</IonTitle>
            <IonText color="light" className="secondary_font_family"><IonIcon icon={trophy} className="small" /> Master</IonText>
          </div>
        </div>
      </IonHeader>
      <IonContent>
        <div className="container page_content ion-padding">
          <div className="container flex align_top">
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
            <Card className="grid">
              <div className="column_small">
                <Mascot className="mascot_white" />
              </div>
              <div className="column_big">
                <IonText color="dark"><strong>Introductie</strong></IonText>
                <IonText color="dark" className="secondary_font_family vragen">10 vragen</IonText>
                <a href="#">Leer onderwerp</a>
              </div>
            </Card>
          </div>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
