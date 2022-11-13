import React from 'react';
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form';

// type InputEmailFields = {
//     register: UseFormRegister<FieldValues>;
//     errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
// };

export default function FormEmail() {
    return (
        <>
            <div className="form-control w-full">
                <label htmlFor="email" className="label-text label font-bold">
                    Email or mobile phone number
                </label>

                <input
                    type="text"
                    id="email"
                    placeholder="admin@gmail.com"
                    className="input-bordered input placeholder:opacity-60"
                    autoFocus // defaultValue="John@gmail.com"
                    {...register('email', {
                        required: 'Please enter email',
                        pattern: {
                            // name @ domain extension
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                            message: 'Please enter valid email',
                        },
                    })}
                />

                {errors.email && (
                    <div className="text-pink-500 opacity-60">
                        <>{errors.email.message}</>
                    </div>
                )}
            </div>
        </>
    );
}
