import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
    email: Yup
        .string()
        .email('Please enter a valid email')
        .required('Please enter an email'),
    password: Yup
        .string()
        .min(5, 'Min Length password !')
        .required('Password required'),
});

export default LoginValidation;
