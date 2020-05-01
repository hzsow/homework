import produce from 'immer';
import { CREATE_TEMPLATE_ERROR, CREATE_TEMPLATE_SUCCESS, CREATE_TEMPLATE_LOADER, CREATE_TEMPLATE_MODAL_HIDE, CREATE_TEMPLATE_MODAL_SHOW, GET_TEMPLATE_ERROR, GET_TEMPLATE_LOADER, GET_TEMPLATE_SUCCESS } from '../actions';
  
let initialState = {
    isModalShow: false,
    loader: false,
    success: false,
    template: null
};

export default (state = initialState, action) => {
    return produce(state, draft => {
        if (action.type === CREATE_TEMPLATE_LOADER){
            draft.loader = true;
            draft.success = false;
        }
        if (action.type === CREATE_TEMPLATE_SUCCESS){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = true;
        }
        if (action.type === CREATE_TEMPLATE_ERROR){
            draft.isModalShow = false;
            draft.loader = false;
            draft.success = false;
        }
        if (action.type === CREATE_TEMPLATE_MODAL_SHOW){
            draft.isModalShow = true;
        }
        if (action.type === CREATE_TEMPLATE_MODAL_HIDE){
            draft.isModalShow = false;
        }
        if (action.type === GET_TEMPLATE_LOADER){
            draft.template = null;
        }
        if (action.type === GET_TEMPLATE_SUCCESS){
            draft.template = action.payload;
        }
        if (action.type === GET_TEMPLATE_ERROR){
            draft.template = null;
        }

    })
}