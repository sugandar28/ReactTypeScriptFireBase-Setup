import { SAY_HI } from '../ActionTypes/actionTypes';

const INITIAL_STATE: any = { SayHi: false };

const demoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SAY_HI:
      return { ...state, SayHi: !state.SayHi};
    default:
      return state;
  }
};

export { demoReducer };