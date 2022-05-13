import App from './App';
import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import dva from 'dva';
import model  from './model/index'

const app = dva({
  history: createBrowserHistory(),
});
app.model(model)

app.router(App);

app.start('#root');

if (import.meta.hot) {
  import.meta.hot.accept();
}
