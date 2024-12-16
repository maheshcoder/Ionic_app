import { IonContent, IonPage, IonFooter, IonTabBar, IonTabButton, IonIcon } from '@ionic/react'; // Correct IonIcon import
import { useHistory, useLocation } from 'react-router-dom';
import { homeOutline, arrowBackOutline } from 'ionicons/icons'; 
import Header from '../components/Header'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Footer: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateToHome = () => {
    history.push('/home');
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <>
      {location.pathname === '/home' && (
        <IonFooter>
          <IonTabBar>
            <IonTabButton onClick={navigateToHome}>
              <IonIcon icon={homeOutline} />
              <span>Home</span>
            </IonTabButton>
            <IonTabButton onClick={navigateBack}>
              <IonIcon icon={arrowBackOutline} />
              <span>Back</span>
            </IonTabButton>
          </IonTabBar>
        </IonFooter>
      )}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      
      <IonContent>
        <h1>Welcome to the Home Page!</h1>
        <Swiper spaceBetween={10} slidesPerView={1.5} autoplay={{ delay: 2500 }}>
          <SwiperSlide>
            <img src="https://muselot.in/cdn/shop/articles/gond_painting.jpg?v=1676631899&width=1100" alt="Feature 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg" alt="Feature 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg" alt="Feature 3" />
          </SwiperSlide>
        </Swiper>
      </IonContent>

      <Footer />
    </IonPage>
  );
};

export default Home;
