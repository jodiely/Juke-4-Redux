import {createStore} from 'redux';
import {reducer} from './reducers/root-reducer';

export default createStore(reducer);

<<<<<<< HEAD
=======
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
>>>>>>> 339303b24cf813bad1de0fdf0e031beb0016ead9

