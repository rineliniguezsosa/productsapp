import {useState } from 'react';

interface FormValues {
    [key: string]: string;
}
export const useForm = (initialState:FormValues) => {
    const [form, setForm] = useState<FormValues>(initialState);

    const handleChange = (name:string,value:string) =>{
        console.log(name,value);

        setForm((prevState)=>({
            ...prevState,
            [name]:value,
        }));
    };
  return {
    form,
    handleChange,
  };
};
