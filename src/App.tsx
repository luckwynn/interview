import MyRoute from '@/routes/route';
import './App.css';

function App(props: any) {
  return <MyRoute history={props.history} />;
}

export default App;
