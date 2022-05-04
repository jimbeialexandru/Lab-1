import LayoutContent from "./Layout";
import {Overview} from "./Overview";
import rootStore from '../mst/Provider.store';
import React from "react";

function Home() {
    function refreshPage() {
        window.location.reload();
      }
    return (
    <>
        <LayoutContent/>
        <Overview students={rootStore.students}/>
        <button onClick={rootStore.saveToLocalStorage}>Save to LocalStorage</button>
        <br />
        <button onClick={rootStore.clearLocalStorage}>Clear LocalStorage</button>
        <br />
        <button onClick={rootStore.setLocalStorageTestData}>Set LocalStorage test data</button>
        <br />
        <button onClick={refreshPage}>Click to reload!</button>
    </>
    )
}
export default Home