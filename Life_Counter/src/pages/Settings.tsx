import React, { useContext } from "react";
import { IonButton, IonButtons, IonContent, IonInput, IonItem, IonPage } from "@ionic/react";
import { NumbStore } from "../state/Index"
import { getPeople } from "../state/Selectors";
import { useStoreState } from "pullstate";
import { changeName } from "../state/NumbStore";
import { Person } from "../components/Person";


const Settings: React.FC = () => {

    const people = NumbStore.useState(s => s.people);
    const peopleA = useStoreState(NumbStore, getPeople)
    const handleClick = () => {
        router.push('/settings');
      };

    return (
        <IonPage>
            <IonContent>SETTINGS
                <div>
                    {
                        peopleA.map((person, index) => {
                            return <Person person={ person } key={ index } />;
                        })
                    }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Settings;