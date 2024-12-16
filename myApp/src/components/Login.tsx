import { IonContent, IonPage, IonInput, IonButton, IonItem, IonLabel, IonToast, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    const validUsername = 'mahesh';
    const validPassword = 'mahesh123';

    if (username === validUsername && password === validPassword) {
      history.push('/logo');
    } else {
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>  LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Content */}
      <IonContent className="ion-padding" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <p style={{ marginBottom: '30px', color: 'gray' }}>Please log in to continue</p>

          {/* Username Input */}
          <IonItem>
            <IonLabel position="stacked">Username</IonLabel>
            <IonInput
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              placeholder="Enter your username"
            />
          </IonItem>

          {/* Password Input */}
          <IonItem style={{ marginTop: '15px' }}>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              placeholder="Enter your password"
            />
          </IonItem>

          {/* Box with Button */}
          <IonCard style={{ marginTop: '30px', border: '2px solid #ccc', padding: '20px', textAlign: 'center' }}>
            <IonCardContent>
              <IonButton expand="block" onClick={handleLogin}>
                Login
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Toast for invalid credentials */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Invalid username or password."
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
