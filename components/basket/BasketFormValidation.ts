import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "yup-phone";

const schema = yup.object({
    name: yup
        .string()
        .required("Обов'язкове поле!")
        .matches(/^([^0-9]*)$/, 'Введіть букви!')
        .min(2, 'Мінімум 2 символа для заповнення'),
    phone: yup
        .string()
        .required("Обов'язкове поле!")
        .phone('UA', true, 'Введіть правильний номер'),
    delivery: yup
        .string()
        .required("Виберіть спосіб доставки")
});

export const FormValidation: Object = {
    defaultValues: {
        name: '',
        phone: '',
    },
    resolver: yupResolver(schema),
    mode: 'onBlur'
}