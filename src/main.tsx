import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import dva from 'dva';

import model  from './model/index'
import App from './routes/route';
import './index.css'


const app = dva({
  history: createBrowserHistory(),
});
app.model(model)

app.router(App);

app.start('#root');

if (import.meta.hot) {
  import.meta.hot.accept();
}
