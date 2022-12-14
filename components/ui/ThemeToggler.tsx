import { useState } from 'react';
import { Switch } from '@headlessui/react';

// https://headlessui.com/react/switch
export function ThemeToggle() {
    // https://reactjs.org/docs/hooks-state.html
    // Declare a new state variable, which we'll call "enabled" to false.
    // setEnabled updates enabled variable.
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="transition-colors hover:brightness-110 active:brightness-90">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    enabled ? 'bg-gray-400' : 'bg-gray-900'
                } relative inline-flex h-[21px] w-[42px] shrink-0 cursor-pointer 
                      rounded-full border-2 border-transparent 
                      transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  
                      focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Toggle Light/Dark Theme</span>
                <div className="flex items-center">
                    <span
                        className={`${
                            enabled
                                ? 'translate-x-0 text-white'
                                : 'translate-x-5 text-white'
                        } absolute px-1 text-xs tracking-tighter opacity-0 transition-all ease-in hover:opacity-100 `}
                    >
                        {!enabled ? 'dark' : 'light'}
                    </span>

                    <span
                        aria-hidden="true"
                        className={`${
                            enabled
                                ? 'translate-x-7 bg-gray-300'
                                : 'translate-x-0 bg-amber-500'
                        } pointer-events-none inline-block h-[16px] w-[16px] 
                        transform rounded-full bg-white shadow-lg ring-0 
                        transition duration-200 ease-in-out`}
                    />
                </div>
            </Switch>
        </div>
    );
}
