import {applyMiddleware, combineReducers, createStore, } from "redux";
import {ProfileReduce} from "./Profile-reduce";
import {DialogReduce} from "./Dialog-reduce";
import {SidebarReduce} from "./Sidebar-reduce";
import {UsersReduce} from "./Users-reduce";
import {authReduce} from "./Auth-reduce";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    ProfilePage:ProfileReduce,
    DialogPage:DialogReduce,
    SidebarReduce:SidebarReduce,
    Sidebar:SidebarReduce,
    UsersPage:UsersReduce,
    Auth: authReduce,


})
export type AppStateType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware) )
export type ReduxStoreType = typeof store
// @ts-ignore

window.store = store.getState()
