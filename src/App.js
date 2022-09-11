import store from './store'
import { Provider } from 'react-redux';
import MessageContainer from './components/messageContainer';

function App() {
  return (
    <Provider store={store}>
    <div>
      <MessageContainer senderIdentifiant={store.message.senderIdentifiant} />
    </div>
    </Provider>
  );
}

export default App;
