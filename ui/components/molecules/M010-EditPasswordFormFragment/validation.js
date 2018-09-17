import { object, string, ref } from 'yup'

const validation = object().shape({
  password: string()
    .min(8, 'Password has to be longer than 8 characters!')
    .required('Password is required!'),
  passwordConfirmation: string()
    .matches(ref('password'), 'passwords don\'t match')
    .required('Password confirmation is required!')
})

export default validation
