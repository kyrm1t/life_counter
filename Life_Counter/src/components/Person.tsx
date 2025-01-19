import { IonAvatar, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { changeName } from "../state/NumbStore";

export const Person = ({ person }) => {

	return (
        <IonInput label="Update Name" placeholder={person} value={person.name} onIonInput={ (e) => changeName(person.id, e.detail.value || '')}></IonInput>
	);
}