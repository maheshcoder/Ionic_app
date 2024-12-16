import { IonFooter, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { homeOutline, arrowBackOutline } from 'ionicons/icons';

const Footer: React.FC = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/home'); 
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
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
  );
};

export default Footer;
