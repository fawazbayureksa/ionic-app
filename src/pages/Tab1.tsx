import { IonAvatar, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonVirtualScroll } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { chatbubble, chatbubbleOutline, heartOutline } from 'ionicons/icons';


const Tab1: React.FC = () => {

  const data = [{ name: "revelvetcake" }, { name: "wahyu" }, { name: "iqbal" }, { name: "Agung" }, { name: "Anto" }]

  function truncate(str: string) {
    return str.length > 5 ? str.substring(0, 5) + "..." : str;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow class="ion-justify-content-between">
            <IonCol size="10">
              <IonTitle>Instagram</IonTitle>
            </IonCol>
            <IonCol>
              <IonIcon aria-hidden="true" size='large' icon={heartOutline} />
              <IonIcon aria-hidden="true" size='large' icon={chatbubbleOutline} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRow class="ion-align-items-center ion-justify-content-start content-story" >
          {data.map((a, id) => (
            <IonAvatar class='text-center mr-2' key={id}>
              <img alt={a.name} className='img-outline' src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              <IonText>{truncate(a.name)}</IonText>
            </IonAvatar>
          ))}
        </IonRow>
        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
