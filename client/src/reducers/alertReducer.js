import { TOGGLE_ALERT, CHANGE_ALERT } from '../actions/types';

const initialState = {
  show: false,
  type: "SUCCESS",
  msg: "Data was Saved Successfully!"
};


export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALERT:
      console.log("KKKKKKKKKLOLLLL");
      console.log(action);
      console.log({
        ...state,
        show: (action.hasOwnProperty("val") && action.val != undefined)?action.val:!state.show,
        type: action.resType,
        msg: action.msg
      });
      return {
        ...state,
        show: (action.hasOwnProperty("val") && action.val != undefined)?action.val:!state.show,
        type: action.resType,
        msg: action.msg
      }

    case CHANGE_ALERT:
      return {
        ...state,
        type: action.resType,
        msg: action.msg
      }

    default:
      return state

  }
}
