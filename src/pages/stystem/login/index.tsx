import { Input } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'dva';

import './index.less'

export default () => {
  const login = useSelector((state: any) => state.login);
  const {captcha}  = login
  const dispatch = useDispatch();

  const getCaptcha = () => {
    dispatch({
      type: 'login/getCaptchId'
    })
  }

  useEffect(() => {
    getCaptcha()
  }, []);

  return (
    <div className='container'>
      <Input
        style={{ marginRight: 10 }}
        size="large"
        placeholder="请输入验证码"
        suffix={
          captcha ? (
            <img
              title="点击切换验证码"
              src={captcha}
              alt="验证码"
              onClick={() => {
                getCaptcha()
              }}
            />
          ) : (
            <span>正在获取验证码</span>
          )
        }
      />
    </div>
  );
};
