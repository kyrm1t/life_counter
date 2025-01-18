import React, { useContext } from "react";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import { NumbStore } from "../state/Index"


const Settings: React.FC = () => {

    const people = NumbStore.useState(s => s.people);

    return (
        <IonPage>
            <IonContent>SETTINGS
                <div>
                    {
                        people.map((person, index) => {
                            return <div> {person} </div>
                        })
                    }
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Settings;