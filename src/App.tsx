import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/135x135/2571/2571273/produto/370344617/cs18006-11-76m2t0gega.jpg">
        Olha só que legal minha miniatura de uma ferrari.
      </Post>
    </div>
  );
}

export default App;
