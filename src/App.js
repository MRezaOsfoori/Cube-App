import CubeMain from "./Containers/CubeMain";
import ContextProvider from "./Context/context";

function App() {
  return (
    <>
      <ContextProvider>
        <CubeMain />
      </ContextProvider>
    </>
  );
}

export default App;
