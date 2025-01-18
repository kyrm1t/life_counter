import {createSelector} from "reselect";

const getstate = state => state;

// gets
export const getPeople = createSelector(getstate, state => state.people);

