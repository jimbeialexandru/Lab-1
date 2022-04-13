import React from 'react';
import './App.css';
import Layout_content from "./components/Layout";
import {Overview} from "./components/Overview";
import rootStore from './mst/Provider.store';


function App() {
  const [rootStoreState, setRootStoreState] = React.useState(rootStore.getLocalStorage())
  React.useEffect(()=>{
    console.log('')
  }, [rootStoreState])

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="App">
        <Layout_content
        />
        <Overview students={rootStore.students}
        />
        <button onClick={rootStore.saveToLocalStorage}>Save LocalStorage</button>
        <br />
        <button onClick={rootStore.clearLocalStorage}>Clear LocalStorage</button>
        <br />
        <button onClick={rootStore.setLocalStorageTestData}>Set LocalStorage data</button>
        <br />
        <button onClick={refreshPage}>Reload</button>
    </div>
  );
}

export default App;
