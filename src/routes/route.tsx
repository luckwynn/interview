import { Router, Route, Redirect } from 'dva/router';
import Demo from '@/pages/stystem/login/index';
export default (props: any) => {
  return (
    <Router history={props.history}>
      <Route path="/" component={Demo} />
      <Redirect to="/" />
    </Router>
  );
};
