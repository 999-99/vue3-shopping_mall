import {
    createStore
} from "vuex";
import actions from './actions';
import mutations from './mutations';
export default new createStore({
    modules: {
        mutations
    },
    actions
});