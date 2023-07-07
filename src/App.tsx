import RepositoriesList from "./components/RepositoriesList";
import { Provider } from "react-redux";
import { store } from "./typescript-redux";

function App() {
  return (
    <Provider store={store}>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
