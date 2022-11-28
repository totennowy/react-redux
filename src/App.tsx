// @redux
import {Provider} from "react-redux";

// @styles
import styles from './App.module.scss';

// @store
import store from "./store/store";

// @components
import Form from "./components/form/Form.component";

function App() {
    return (
        <Provider store={store}>
            <div className={styles.wrap}>
                <Form />
            </div>
        </Provider>
    );
}

export default App;
