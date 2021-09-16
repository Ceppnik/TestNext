import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const onFinish = ({ email, password, remember }: any) => {
    if (
      email.toLowerCase().trim() === "admin@test.ru" &&
      password === "12345678qwe"
    ) {
      if (remember) {
        localStorage.setItem("isAuth", "true");
      }
      router.push("/profile");
    } else {
      message.error("Введен неверный логин или пароль");
    }
  };

  return (
    <div
      style={{
        padding: 74,
        maxWidth: 350,
        minWidth: 300,
        boxShadow:
          "rgba(136, 165, 191, 0.48) 6px 2px 16px 10px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Введите email",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Введите пароль",
              validateTrigger: "onSubmit",
            },
            {
              min: 6,
              message: "Пароль должен содержать не менее 6 символов",
              validateTrigger: "onSubmit",
            },
            {
              pattern: /[a-zA-Zа-яА-Я]+/,
              message: "Пароль должен содержать не менее 1 буквы",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
