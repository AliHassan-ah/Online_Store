import * as Yup from 'yup'
export const signuUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Name is a required field"),
    email: Yup.string().email().required("Email is a required field"),
    password : Yup.string().min(6).required("Password is a required field"),
    confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")
})
