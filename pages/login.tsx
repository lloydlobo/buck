/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import { LoginForm } from '../components/login/LoginForm';
import { LoginHelp } from '../components/login/LoginHelp';
import LoginSignUp from '../components/login/LoginSignUp';
import { SpinnerLoading } from '../components/ui/SpinnerLoading';

export default function LoginScreen() {
    const [toggleHelp, setToggleHelp] = useState(false);
    const [loading, setloading] = useState(true); // Pre-loader before page renders

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 0);
    }, []);

    return (
        <>
            <Layout title={'Login'}>
                {loading ? (
                    <SpinnerLoading />
                ) : (
                    <div className="grid place-content-center pt-8">
                        <div className="card grid place-self-center rounded-md bg-base-300 p-8">
                            <LoginForm />
                            <LoginHelp
                                toggleHelp={toggleHelp}
                                setToggleHelp={setToggleHelp}
                            />
                        </div>
                        <LoginSignUp />
                    </div>
                )}
            </Layout>
        </>
    );
}

// https://react-hook-form.com/get-started
