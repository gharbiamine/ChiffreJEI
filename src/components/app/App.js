import styles from "./app.module.css"
import {ExecutiveBoard} from "../executive-board/ExecutiveBoard";


function App() {
  return (
   <>

<div className={styles.global}>
       <ExecutiveBoard/>

</div>
   </>
  );
}

export default App;
