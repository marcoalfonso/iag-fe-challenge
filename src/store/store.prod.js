import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from 'reducers'
import authMiddleware from './authMiddleware'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'editorMode', 'sorting', 'persistedExecution']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState) {
  let store = createStore(persistedReducer, initialState, applyMiddleware(authMiddleware, thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}
