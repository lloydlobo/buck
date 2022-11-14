import { Context, createContext, ReducerState, useReducer } from 'react';

// If you thought this should be optional, see
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
let defaultContextValue: unknown;

export const Store: Context<unknown> = createContext(defaultContextValue);

export const COOKIE_KEY_CART = 'cart';

const initialState: ReducerState<any> | never = {
    cart: {
        cartItems: [],
    },
};

// (alias) useReducer<(state: CartState, action: {
//     type: any;
//     payload: any;
// }) => CartState>(reducer: (state: CartState, action: {
//     type: any;
//     payload: any;
// }) => CartState, initialState: CartState, initializer?: undefined): [...] (+4 overloads)

type CartState = {
    cart: {
        cartItems: {
            name: string;
            slug: string;
        }[];
        shippingAddress: {
            location: {};
        };
        paymentMethod: string;
    };
};

function reducer(
    state: CartState,
    action: { type: any; payload: any }
): CartState {
    switch (action.type) {
        case 'CART_ADD_ITEM': {
            const newItem = action.payload;

            const existItem = state.cart.cartItems.find(
                (item: { slug: string }) => item.slug === newItem.slug
            );

            const cartItems = existItem
                ? state.cart.cartItems.map((item) =>
                      item.name === existItem.name ? newItem : item
                  )
                : [...state.cart.cartItems, newItem];

            return { ...state, cart: { ...state.cart, cartItems } };
        }
        default: {
            return state;
        }
    }
}

/**
 * StoreProvider is a React component.
 *
 * An alternative to `useState`.
 *
 * `useReducer` is usually preferable to `useState` when you have complex state logic that involves
 * multiple sub-values. It also lets you optimize performance for components that trigger deep
 * updates because you can pass `dispatch` down instead of callbacks.
 *
 * Call it in _app.tsx
 */
// overload where dispatch could accept 0 arguments.
export function StoreProvider({ children }: { children: any }): JSX.Element {
    // useReducer({state, action}): void
    const [state, dispatch] = useReducer(reducer, initialState as never);

    const value = { state, dispatch };

    return <Store.Provider value={value}>{children}</Store.Provider>;
}
