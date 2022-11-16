import { signIn, useSession } from 'next-auth/react';
import Url, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../../utils/getError';

/**
 * LoginForm component handles user sign in.
 *
 * @returns {JSX.Element}
 */
export function LoginForm(): JSX.Element {
    /**
     * React Hook that gives you access
     * to the logged in user's session data.
     * [Documentation](https://next-auth.js.org/getting-started/client#usesession)
     */
    const { data: session } = useSession(); // Access session from _app.tsx.

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        // Check if user is already logged in.
        if (session?.user) {
            // Get redirect from query string.
            router.push((redirect as unknown as URL) || '/');
        }
    }, [redirect, router, session]);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ email, password }: any) => {
        try {
            // Pass email, password as callback to signIn func.
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password,
            });
            if (result?.error) {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error(getError(error as unknown as any));
        }

        return { email: email, password: password };
    };

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
                        className="input-bordered input placeholder:opacity-60 focus:ring"
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
                        className="input-bordered input placeholder:opacity-60 focus:ring"
                        {...register('password', {
                            required: 'Please enter password',
                            minLength: {
                                value: 6,
                                message: 'Password should be more than 5 chars',
                            },
                        })}
                    />
                    {errors.password && (
                        <div className="text-pink-500 opacity-60">
                            <>{errors.password.message}</>
                        </div>
                    )}
                </div>

                {/* Submit input btn */}
                <input
                    type="submit"
                    className="btn-primary input btn mt-2 w-full place-self-center"
                />
            </form>
        </>
    );
}
