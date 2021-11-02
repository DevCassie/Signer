import { IonHeader, IonTitle, IonPage, IonContent, IonText, IonIcon, IonicSwiper } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { trophy, cash } from 'ionicons/icons';
import { auth } from '../firebase';
import Card from '../components/Card';
import Mascot from '../components/Mascot';
import Button from '../components/Button';

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
      <IonHeader className="header_achievements background_purple">
        <div className="grid">
          <Mascot className="header_small" />
          <div className="header_title achievements">
            <IonTitle color="light">{userName}</IonTitle>
            <IonText color="light"><IonIcon icon={trophy} color="light" /> Master</IonText>
          </div>
          <div className="header_menu">
              <IonText color="light" className="selected_background">Achievements</IonText>
            <IonText color="light" className="need_active">Shop</IonText>
          </div>
        </div>
      </IonHeader>
      <IonContent>
        <Swiper effect="fade" className="swiper" initialSlide={0} onRealIndexChange={(swiper) => {
          const activeElement = document.querySelector('.selected_background');
          const setToActiveElement = document.querySelector('.need_active');
          console.log(swiper.previousIndex !== swiper.activeIndex, swiper.activeIndex, swiper.previousIndex);
          if (swiper.previousIndex !== swiper.activeIndex) {
            activeElement.classList.add('need_active');
            activeElement.classList.remove('selected_background');
            setToActiveElement.classList.add('selected_background');
            setToActiveElement.classList.remove('need_active');
            console.log(setToActiveElement);
          }
        }}>
          <SwiperSlide>
            <div className="container page_content ion-padding">
              <div className="container grid align_top">
                <Card className="flex column_1">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div>
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_1">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
                      <IonIcon icon={trophy} className="icon_achievement" /> 
                    </div>
                  </div> 
                  <IonText color="dark" className="margin_bottom margin_top"><strong>Introductie</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center">Je hebt je introductie<br />behaald!</IonText>
                </Card>
                <Card className="flex column_2">
                  <div className="background_dark_orange">
                    <div className="background_light_orange">
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
                  <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_2">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_1">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_2">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_1">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_2">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_1">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
                </Card>
                <Card className="flex column_2">
                <Mascot className="mascot_white" /> 
                  <IonText color="dark" className="margin_bottom"><strong>Lachen</strong></IonText>
                  <IonText color="dark" className="secondary_font_family text_align_center icon_align margin_bottom"><IonIcon icon={cash} size="small" /> 25 Coins</IonText>
                  <Button className="button" size="medium" text="Kopen" />
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
