import * as yup from 'yup'

//Validation
export default yup.object().shape({
    email: yup.string().email().required('Please Enter Your Email !'),
    password:yup.string().matches(
        /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/ ,
        'password must be 8 char'
    ).required('Please Enter Your Password !'),
});

//show error each input schema :
export const fieldSchema = (fieldName) => {
    switch (fieldName) {
        case 'email':
            return yup.string().email().required('Please Enter Your Email !');

        case 'password':
            return yup.string().matches(
            /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)(?=.{8,}).*$/ ,
            'password must be 8 char'
        ).required('Please Enter Your Password !');

        default:
            throw new Error('invalid fieldName');
    }

};