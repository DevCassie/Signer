import { useRef, useState } from 'react';
import { IonHeader, IonTitle, IonPage, IonContent, IonText, IonIcon, IonicSwiper } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { trophy } from 'ionicons/icons';
import { auth } from '../firebase';
import Card from '../components/Card';
import Mascot from '../components/Mascot';

import './Achievements.css';
import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css'; 

interface Achievementsprops { };

const Achievementspage: React.FC<Achievementsprops> = () => {
  const userName = auth.currentUser.displayName;

  SwiperCore.use([IonicSwiper]);

  return (
    <IonPage>
      <IonHeader className="header">
        <div className="grid">
          <Mascot className="header_small" />
          <div className="header_title achievements">
            <IonTitle color="light">{userName}</IonTitle>
            <IonText color="light"><IonIcon icon={trophy} color="light" /> Master</IonText>
          </div>
          <div className="header_menu">
            <div id="selected_background">
              <IonText color="dark">Achievements</IonText>
            </div>
            <IonText color="light">Shop</IonText>
          </div>
        </div>
      </IonHeader>
      <IonContent>
        <Swiper effect="fade" initialSlide={0}>
          <SwiperSlide>
            <div className="container page_content ion-padding">
              <div className="container grid align_top">
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
              </div>  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container page_content ion-padding">
              <div className="container grid align_top">
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_blue">
                    <div className="background_light_blue">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
              </div>  
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default Achievementspage;
