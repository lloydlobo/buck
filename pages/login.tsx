/* eslint-disable @next/next/no-img-element */

// https://tailwindui.com/components/application-ui/forms/sign-in-forms
import { LockClosedIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';
import EditBucketForm from '../components/bucket/EditBucketForm';
import Layout from '../components/Layout';

export default function LoginScreen() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const [toggleHelp, setToggleHelp] = useState(false);

    console.log(watch('example'));

    return (
        <>
            <Layout title={'Login'}>
                <div className="grid pt-8">
                    <div className="grid place-content-center place-self-center">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ width: 'max(35vw, 300px)' }}
                            className="mb-6 grid gap-2 rounded-md bg-base-200 px-8 pt-6 pb-8 shadow"
                        >
                            <label className="label text-3xl">Sign In</label>
                            <div className="form-control w-full">
                                <label
                                    htmlFor="inputEmail"
                                    className="label-text label font-bold"
                                >
                                    Email or mobile phone number
                                </label>
                                <input
                                    type="text"
                                    id="inputEmail"
                                    placeholder="admin@gmail.com"
                                    className="input-bordered input placeholder:opacity-60"
                                    autoFocus
                                    // defaultValue="John@gmail.com"
                                    {...register('example')}
                                />
                            </div>
                            <div className="form-control w-full">
                                <label
                                    htmlFor="inputEmail"
                                    className="label-text label font-bold"
                                >
                                    Enter your password
                                </label>
                                <input
                                    type="text"
                                    placeholder="* * * * * * * *"
                                    className="input-bordered input placeholder:opacity-50"
                                    {...register('exampleRequired', {
                                        required: true,
                                    })}
                                />
                            </div>

                            {errors.exampleRequired && (
                                <span>This field is required!</span>
                            )}
                            {/* Submit input btn */}
                            <input
                                type="submit"
                                className="btn-primary input btn mt-2 w-full place-self-center"
                            />

                            {/* Help with Sign-In. */}
                            <div className="mt-4 grid gap-6">
                                <div
                                    className="fyi w-full opacity-60"
                                    style={{ maxWidth: '30ch' }}
                                >
                                    By continuing, you agree to Bucket&apos;s
                                    Conditions of Use and Privacy Notice.
                                </div>

                                <div tabIndex={0} className="collapse">
                                    <input
                                        type="checkbox"
                                        onClick={() =>
                                            setToggleHelp(!toggleHelp)
                                        }
                                        style={{
                                            padding: 0,
                                            minHeight: '2ch',
                                            margin: 0,
                                        }}
                                        className=""
                                    />
                                    <div
                                        style={{
                                            paddingBlock: 3,
                                            minHeight: '2px',
                                            margin: 0,
                                        }}
                                        className="collapse-title m-0 flex items-center p-0 leading-none opacity-60"
                                    >
                                        <span className="text-neutral-content opacity-60">
                                            {toggleHelp ? (
                                                <FaCaretDown className="" />
                                            ) : (
                                                <FaCaretRight className="" />
                                            )}
                                        </span>
                                        <span className="link-info ">
                                            Need help?
                                        </span>
                                    </div>
                                    <div className="collapse-content">
                                        <div className="flex flex-col opacity-60">
                                            <Link
                                                href={'forgot-password'}
                                                className="link-info"
                                            >
                                                Forgot Password
                                            </Link>
                                            <Link
                                                href={'help-sign-in'}
                                                className="link-info"
                                            >
                                                Other issues with Sign-In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="signup">
                            <div className="flex flex-col border-opacity-50">
                                {/* <div className="card rounded-box grid h-20 place-items-center bg-base-300"> content </div> */}
                                <div className="divider">
                                    <span className=" text-sm opacity-50">
                                        New to Buckets?
                                    </span>
                                </div>
                                {/* <div className="card rounded-box grid h-20 place-items-center bg-base-300"> content </div> */}
                            </div>
                        </div>
                        <button className="btn-ghost input btn bg-base-300 shadow-md">
                            Create your Buckets account
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
}

// <EditBucketForm />
// {/* <NavbarTailwind /> */}
// <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//     <div className="w-full max-w-md space-y-8">
//         <div>
//             <img
//                 className="mx-auto h-12 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 alt="Your Company"
//             />
//             <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
//                 Sign in to your account
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//                 Or{' '}
//                 <a
//                     href="#"
//                     className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                     start your 14-day free trial
//                 </a>
//             </p>
//         </div>
//         <form
//             className="mt-8 space-y-6"
//             action="#"
//             method="POST"
//         >
//             <input
//                 type="hidden"
//                 name="remember"
//                 defaultValue="true"
//             />
//             <div className="-space-y-px rounded-md shadow-sm">
//                 <div>
//                     <label
//                         htmlFor="email-address"
//                         className="sr-only"
//                     >
//                         Email address
//                     </label>
//                     <input
//                         id="email-address"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                         placeholder="Email address"
//                     />
//                 </div>
//                 <div>
//                     <label
//                         htmlFor="password"
//                         className="sr-only"
//                     >
//                         Password
//                     </label>
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//                         placeholder="Password"
//                     />
//                 </div>
//             </div>
//
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                     />
//                     <label
//                         htmlFor="remember-me"
//                         className="ml-2 block text-sm text-gray-900"
//                     >
//                         Remember me
//                     </label>
//                 </div>
//
//                 <div className="text-sm">
//                     <a
//                         href="#"
//                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                     >
//                         Forgot your password?
//                     </a>
//                 </div>
//             </div>
//
//             <div>
//                 <button
//                     type="submit"
//                     className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                     <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                         <LockClosedIcon
//                             className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                             aria-hidden="true"
//                         />
//                     </span>
//                     Sign in
//                 </button>
//             </div>
//         </form>
//     </div>
// </div>
