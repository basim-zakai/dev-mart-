import { configureStore } from '@reduxjs/toolkit'
import { UserSlice } from '../user-slice'
import rootReducer from './root-reducer'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import persistReducer from 'redux-persist/es/persistReducer'


const persistConfig = {
  key:"root",
  storage:storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);