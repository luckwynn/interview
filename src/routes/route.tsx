import {Router, Route} from 'dva/router'
import Demo from '@/pages/index';
export default (props: any) => {
  return (
    <div>
      <Router history={props.history}>
        <Route path="/" component={Demo} />
      </Router>
    </div>
  );
};
