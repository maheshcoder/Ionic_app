import { IonContent, IonPage, IonImg } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/images.jpg';

const LogoPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    // Automatically navigate to the Home page after 3 seconds
    const timer = setTimeout(() => {
      history.push('/home');
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent className="logo-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
        <div>
          <IonImg src={logo} alt="App Logo" style={{ width: '200px', margin: 'auto' }} />
          <h2 style={{ marginTop: '20px' }}>Welcome to Our App</h2>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogoPage;
