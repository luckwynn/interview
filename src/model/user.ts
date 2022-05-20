import { getCaptchaId } from '@/services/user';
import { Model } from 'dva';

export interface State {
  captcha_id: string;
}

interface loginModel extends Model {
  namespace: string;
  state: State;
}

const login: loginModel = {
  namespace: 'login',
  state: {
    captcha_id: '',
  },
  effects: {
    *getCaptchId(_, { call }) {
      const res = yield call(getCaptchaId);
      console.log(res);
    },
  },
  reducers: {
    delete(state: any[], { payload: id }: any) {
      return state.filter((item: { id: any }) => item.id !== id);
    },
  },
};

export default login;
