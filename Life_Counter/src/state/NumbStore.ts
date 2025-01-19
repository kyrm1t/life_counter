import {Store} from "pullstate";
import { people } from "../data";

const NumbStore = new Store({

    people: people
});

export const changeName = (personId: number, name: string) => {

    NumbStore.update(s => {
        const personIndex = s.people.findIndex(person => person.id === personId);
        s.people[personIndex].name = name;
    });
}

export default NumbStore;