import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ipEmulador = '10.0.2.2'
const ipDevice = '192.168.3.4'

if (__DEV__){
    const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure({ host: '192.168.3.4'})
        .useReactNative()
        .use(reactotronRedux())
        .use(reactotronSaga())
        .connect();

    tron.clear();

    console.tron = tron;
}