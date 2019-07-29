import LoginValidationSchema from "./LoginShema";

const WithFormikConfig = {
    //enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    handleSubmit: (values, {props, setSubmitting}) => {
        console.log("Submitted Email:", values.email);
        console.log("Submitted Password:", values.password);
        // Simulates the delay of a real request
        console.log(props);
        const payload = {
            ...values,
        };
        props.loginUser(payload);
        // test
        setTimeout(() => setSubmitting(false), 3 * 1000);
    },
    validationSchema: LoginValidationSchema
};

export default WithFormikConfig;
