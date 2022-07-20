import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
// import usersReducer from './users-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})


const store = createStore(rootReducer)

// export type ReduxStoreType = typeof store

export type AppRootStateType = ReturnType<typeof rootReducer>

export default store