import * as yup from 'yup';

export const userValidation = yup.object().shape({
    username: yup.string().min(2).required('Username is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(10).max(50).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords doesnt match')

    
});