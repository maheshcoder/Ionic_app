import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonFooter, IonTabBar, IonTabButton, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { homeOutline, arrowBackOutline } from 'ionicons/icons';
import Header from './Header'; 

const ProfileEdit: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const history = useHistory();
  const location = useLocation();

  const handleSave = () => {
    console.log('Saved:', { username, email });
  };

  const navigateToHome = () => {
    history.push('/home');
  };

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <Header />

      <IonContent>
        <h1>Edit Profile</h1>
        
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput 
            value={username} 
            onIonChange={(e) => setUsername(e.detail.value!)} 
          />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput 
            value={email} 
            onIonChange={(e) => setEmail(e.detail.value!)} 
          />
        </IonItem>

        <IonButton onClick={handleSave}>Save</IonButton>
      </IonContent>

      {location.pathname === '/profile-edit' && (
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
    </IonPage>
  );
};

export default ProfileEdit;
