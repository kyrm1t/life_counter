import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import { changeName } from "../state/NumbStore";
import './ExploreContainer.css';


export const CounterBox = ({ person }) => {

    return (
        <IonItem>
            <IonRow>
                <IonCol>
                    <IonButton>
                        -
                    </IonButton>
                </IonCol>
                <IonCol>
                <IonRow>
                    <IonCol class={`${person.id ? "mirror" : null}`}>
                        {person.id ? person.name : person.id}
                    </IonCol>
                    <IonCol class={`${person.id ? "mirror" : null}`}>
                        {person.id ? person.id : person.name}
                    </IonCol>
                </IonRow>
                </IonCol>
                <IonCol>
                    <IonButton>
                        +
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonItem>
      );

	return (
        <IonInput label="Update Name" placeholder={person} value={person.name} onIonInput={ (e) => changeName(person.id, e.detail.value || '')}></IonInput>
	);
}