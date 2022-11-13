import React from 'react';
import { useForm } from 'react-hook-form';

export function LoginForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ email, password }: any) => {
        return {
            email: email,
            password: password,
        };
    };

    console.log(watch('example'));

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ width: 'max(30vw, 300px)' }}
                className="mb-6 grid gap-2"
            >
                <h1 className="label text-3xl">Sign In</h1>

                <div className="form-control w-full">
                    <label
                        htmlFor="email"
                        className="label-text label font-bold"
                    >
                        Email or mobile phone number
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="admin@gmail.com"
                        className="input-bordered input placeholder:opacity-60"
                        autoFocus
                        // defaultValue="John@gmail.com"
                        {...register('email', {
                            required: 'Please enter a valid email',
                        })}
                    />

                    {errors.email && (
                        <div className="text-pink-500 opacity-60">
                            <>{errors.email.message}</>
                        </div>
                    )}
                </div>

                <div className="form-control w-full">
                    <label
                        htmlFor="password"
                        className="label-text label font-bold"
                    >
                        Enter your password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="* * * * * * * *"
                        className="input-bordered input placeholder:opacity-50"
                        {...register('exampleRequired', {
                            required: true,
                        })}
                    />
                </div>

                {errors.password && (
                    <div className="text-pink-500 opacity-60">
                        <>{errors.password.message}</>
                    </div>
                )}

                {/* Submit input btn */}
                <input
                    type="submit"
                    className="btn-primary input btn mt-2 w-full place-self-center"
                />
            </form>
        </>
    );
}
