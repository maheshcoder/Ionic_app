import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon, IonImg, IonPopover, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';
import logo from '../assets/images.jpg';
import { useState } from 'react';

const Header: React.FC = () => {
  const history = useHistory();
  const [showPopover, setShowPopover] = useState<boolean>(false);
  const [popoverEvent, setPopoverEvent] = useState<React.MouseEvent | null>(null);

  const handleBack = () => {
    history.goBack();
  };

  const handleProfileEdit = () => {
    history.push('/profile-edit');
    setShowPopover(false); 
  };

  const handleLogout = () => {
    history.push('/login'); 
    setShowPopover(false); 
  };

  const handleDetails = () => {
    history.push('/details');
    setShowPopover(false); 
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setPopoverEvent(e);
    setShowPopover(true); 
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={handleBack}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </IonButtons>

        <IonTitle>Home Page</IonTitle>

        <IonButtons slot="end">
          <IonButton onClick={handleLogoClick}>
            <IonImg src={logo} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <IonList>
          <IonItem button onClick={handleProfileEdit}>
            <IonLabel>Profile Edit</IonLabel>
          </IonItem>
          <IonItem button onClick={handleDetails}>
            <IonLabel>Details</IonLabel>
          </IonItem>
          <IonItem button onClick={handleLogout}>
            <IonLabel>Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonPopover>
    </IonHeader>
  );
};

export default Header;
