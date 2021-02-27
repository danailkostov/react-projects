import SetupForm from "./SetupForm";
import Quiz from "./Quiz";
import { useGlobalContext } from "./context";
import ModalComp from "./Modal";

function App() {
  const { isLoading, questions, isModalOpen } = useGlobalContext();
  return (
    <main
      className="App"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? <div>Loading...</div> : questions ? <Quiz /> : <SetupForm />}
      {isModalOpen && <ModalComp />}
    </main>
  );
}

export default App;
