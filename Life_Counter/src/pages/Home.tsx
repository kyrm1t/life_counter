import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { NumbStore } from "../state/Index"
import { getPeople } from "../state/Selectors";
import { useStoreState } from "pullstate";
import { CounterBox } from '../components/CounterBox';

const Home: React.FC = () => {
  const router = useIonRouter();
  const peoples = useStoreState(NumbStore, getPeople);
  const handleClick = () => {
    router.push('/settings');
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton  onClick={handleClick}>Settingz</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <CounterBox person={ peoples[1] } key={ 1 } />
        </IonRow>
        <IonRow>
        <CounterBox person={ peoples[0] } key={ 2 } />
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
