import * as Yup from "yup";
 
export const CheckoutSchema = Yup.object({
f_name: Yup.string().min(2).max(25).required("Please enter your first name"),
l_name: Yup.string().min(2).max(25).required("Please enter your last name"),
address: Yup.string().required("Please enter your address"),
city: Yup.string().min(2).max(10).required("Please enter your city"),
state: Yup.string().min(2).max(10).required("Please enter your state"),
zip: Yup.number().min(4).required("This field is requried"),
card_num: Yup.number() .min(14, "Must be 16 characters").required("This field is requried"),
expire: Yup.date().min("2022-11-13", "Date is expired").typeError("please enter a valid date").required("This field is requried"),
security: Yup.number().min(3).required("This field is requried"),
});