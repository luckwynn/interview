import MyRoute from '@/routes/route'
import './App.css';


function App(props: any) {
  
  return (
    <div className="App">
      <MyRoute history={props.history} />
    </div>
  );
}

export default App;
