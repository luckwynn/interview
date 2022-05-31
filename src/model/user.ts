import { getCaptchaId, getCaptcha } from '@/services/user';
import { Model } from 'dva';

export interface State {
  captcha_id: string;
  captcha: string;
}

interface loginModel extends Model {
  namespace: string;
  state: State;
}

const login: loginModel = {
  namespace: 'login',
  state: {
    captcha_id: '',
    captcha: '',
  },
  effects: {
    *getCaptchId(_, { call, put }) {
      const res = yield call(getCaptchaId);
      const data = yield call(getCaptcha,res.captcha_id)
      yield put({
        type: "saveCaptha",
        payload: {
          captcha_id: res.captcha_id,
          captcha: data,
        }
      })
    },
  },
  reducers: {
    saveCaptha(state,action:any){
      return {
        ...state,
        ...action.payload
      }
    },
    delete(state: any[], { payload: id }: any) {
      return state.filter((item: { id: any }) => item.id !== id);
    },
  },
};

export default login;
