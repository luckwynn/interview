import { Button, Input } from 'antd';
import { getCaptchaId, getCaptcha } from '@/api/user';
import { useState } from 'react';
import { useSelector } from 'dva';

export default () => {
  const [code, setCode] = useState(null);
  const user = useSelector((state: any) => state);
  console.log(user);
  const handleRequest = async () => {
    const res: any = await getCaptchaId();
    setCode(res.captcha_id);
  };
  return (
    <div>
      <Button onClick={handleRequest}>获取验证码</Button>
      <Input
        style={{ marginRight: 10 }}
        size="large"
        placeholder="请输入验证码"
        suffix={
          code ? (
            <img
              title="点击切换验证码"
              src={getCaptcha(code)}
              alt="验证码"
              onClick={() => {}}
            />
          ) : (
            <span>正在获取验证码</span>
          )
        }
      />
    </div>
  );
};
