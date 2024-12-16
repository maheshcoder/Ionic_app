import { IonContent, IonPage, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { arrowBackOutline } from 'ionicons/icons';
const Details: React.FC = () => {
  const history = useHistory();

  const navigateBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent>
        <h1>Details Page</h1>

        <IonButton onClick={navigateBack} fill="clear" style={{ padding: '0', marginBottom: '20px' }}>
          <IonIcon icon={arrowBackOutline} size="large" />
        </IonButton>

        <IonCard style={{ marginTop: '20px' }}>
          <IonCardHeader>
            <IonCardTitle>Environment</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            The environment plays a critical role in maintaining the balance of nature. Protecting our environment is crucial for the well-being of future generations. This includes efforts in recycling, reducing pollution, and conserving natural resources.
          </IonCardContent>
        </IonCard>

        <IonCard style={{ marginTop: '20px' }}>
          <IonCardHeader>
            <IonCardTitle>Art</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Art has always been a reflection of human emotion, culture, and society. It comes in various forms, such as painting, sculpture, music, and dance. Art can inspire, provoke thought, and bring people together through shared experiences.
          </IonCardContent>
        </IonCard>

        <IonCard style={{ marginTop: '20px' }}>
          <IonCardHeader>
            <IonCardTitle>Traffic</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Traffic congestion is a major issue in urban areas around the world. It leads to increased pollution, stress, and wasted time. Solutions like improved public transportation, better road planning, and smart traffic management are key to reducing traffic-related problems.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Details;
