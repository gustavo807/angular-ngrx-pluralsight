import { UserActions, UserActionTypes } from './user.actions';
import { UserState } from './'


const initialState : UserState = {
  maskUserName: false,
  currentUser: null
}

export function reducer(state = initialState, action : UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
