import React, { useState } from 'react'
import { transactions } from '../utils/transactions'
import { data } from '../utils/data';
import { XCircleIcon } from '@heroicons/react/solid';

// TODO: See https://stackoverflow.com/questions/53574614/multiple-calls-to-state-updater-from-usestate-in-component-causes-multiple-re-re
// TODO: USE id to keep readonly elements all individual...
//
export default function BucketsTable() {
    const [disabled, setDisabled] = useState(false)
    const handleClickEditTransaction = () => { setDisabled(!disabled) }

    const handleClickClearTransaction = () => { }

    return (
        < div className="overflow-x-auto px-6 w-full" >
            <table className="table table-compact w-full">
                {/* -- head --  */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Posted</th>
                        <th>Account</th>
                        <th>Memo</th>
                        <th>Amount</th>
                        <th><div className='tooltip tooltip-bottom z-50' data-tip='Bucket'>Category</div></th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {/* -- input rows --  */}
                    <tr>
                        {/* Radio check */}
                        <th>
                            <label><input type="checkbox" className="checkbox" /></label>
                        </th>
                        {/* Posted */}
                        <th>
                            <input
                                type="text"
                                placeholder=""
                                className="input input-md w-24 sm:w-32  input-bordered "
                            />
                        </th>
                        {/* Account */}
                        <th>
                            <div className="form-control">
                                <div className="input-group relative">
                                    <select className="select w-full select-bordered bg-none">
                                        <option disabled selected></option>
                                        {data.accounts.map((account) => <option>{account.type}</option>)}
                                    </select>
                                    <span className="absolute pointer-events-none bg-transparent text-info inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </th>
                        {/* Memo */}
                        <th>
                            <input
                                type="text"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                            />
                        </th>
                        {/* Amount */}
                        <th>
                            <div className='flex gap-1 items-center'>
                                <span>
                                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </span>
                                <input
                                    className="input text-right rounded-full input-sm input-bordered w-[16ch]"
                                    type="text"
                                    placeholder="0.00"
                                />
                            </div>
                        </th>
                        {/* Category */}
                        <th>
                            <div className="input-group relative">
                                <select className="select w-full select-bordered bg-none">
                                    <option disabled selected></option>
                                    {transactions.map((transaction) => <option>{transaction.category}</option>)}
                                </select>
                                <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                    </svg>
                                </span>
                            </div>
                        </th>

                        {/* Actions */}
                        <th>
                            <div className=''>
                                <div className='flex gap'>
                                    {/* no-symbol */}
                                    <button className='btn btn-square btn-ghost'>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                    </button>
                                    {/* check */}
                                    <button className='btn btn-square btn-ghost'>
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </th>
                    </tr>
                    {/* {data.buckets.map((bucket) => ( */}

                    {/* -- ROWS --  */}
                    {
                        transactions.map((transaction) => (
                            <tr>
                                {/* Checkbox */}
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                {/* Posted */}
                                <th>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="input input-md w-24 sm:w-32  input-bordered "
                                        value={transaction.date}
                                    />
                                </th>
                                {/* Account */}
                                <th>
                                    <div className="form-control">
                                        <div className="input-group relative">
                                            <select className="select w-full select-bordered bg-none">
                                                <option disabled selected></option>
                                                {/* NOTE: Can use map().filter()... */}
                                                {data.accounts.map((account) => {
                                                    if (account.type !== transaction.account) return <option>{account.type}</option>
                                                    else return <option selected>{transaction.account}</option>
                                                })}
                                            </select>
                                            <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </th>
                                {/* Memo */}
                                <th>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                        type="text"
                                        placeholder=""
                                        value={transaction.memo}
                                    />
                                </th>
                                {/* Amount */}
                                <th>
                                    <div className='flex gap-1 items-center'>
                                        <span>
                                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                            </svg>
                                        </span>
                                        <input
                                            value={transaction.amount}
                                            className="input text-right rounded-full input-sm input-bordered px-0 mx-0 w-[16ch]"
                                            type={'number'}
                                            placeholder="0.00"
                                        />
                                    </div>
                                </th>
                                {/* TODO: If edit check icon is clicked, style and show border & chevron */}
                                {/* Category */}
                                <th>
                                    <div className="input-group relative">
                                        <select className="select w-full select-bordered bg-none">
                                            <option disabled selected></option>
                                            {/* NOTE: Can use map().filter()... */}
                                            {transactions.map((t) => {
                                                if (t.category !== transaction.category) {
                                                    return <option>{t.category}</option>
                                                }
                                                return <option selected>{transaction.category}</option>
                                            })}
                                        </select>
                                        <span className="pointer-events-none bg-transparent absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                            </svg>
                                        </span>
                                    </div>
                                </th>
                                {/* Actions */}
                                {/* TODO: Use useEffect to maintain active editable state for all buttons */}
                                <th>
                                    <div className='flex gap'>
                                        {/* no-symbol */}
                                        <button
                                            onClick={handleClickClearTransaction}
                                            key={transaction.id}
                                            disabled={disabled}
                                            className={`${!disabled
                                                ? 'opacity-100' : 'opacity-80'
                                                } btn btn-square btn-ghost`
                                            }
                                        >
                                            <svg className={`w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                        </button>
                                        {/* // done check mark. */}
                                        <button
                                            onClick={handleClickEditTransaction}
                                            // and id is not the one clicked?
                                            className={`btn btn-square btn-ghost ${!disabled ? 'block' : 'hidden'}`}
                                            key={transaction.id}
                                            disabled={disabled}
                                        >
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </button>
                                        {/* // pencil edit. */}
                                        <button
                                            onClick={handleClickEditTransaction}
                                            className={`btn btn-square btn-ghost ${disabled ? 'block' : 'hidden'}`}
                                            key={transaction.id}
                                            disabled={!disabled}
                                        >
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                        </button>
                                    </div>
                                </th>
                                { /* Fragments <> allow <select> to have multiple childen. */}
                                {/* <option key={x} value={x} > {x} </option> */}
                                {/* // Using --downlevelIteration flag to iterate. */}
                                {/* {transactions.map((transact: any) => ( */}
                                {/* <select value={transaction.amount}> */}
                                {/*     <> {[...Array(transaction.amount).keys()].map((x) => (<option>{x + 1}</option>))} </> */}
                                {/* </select> */}
                                {/* ))} */}
                            </tr>
                        ))
                    }
                </tbody>

                {/* <!-- foot --> */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Posted</th>
                        <th>Account</th>
                        <th>Memo</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}

const monthlySelect = () => (
    <select className="select select-ghost w-full max-w-xs">
        {/* <option disabled>Pick the best JS framework</option> */}
        <option selected>Monthly</option>
        <option>One Time</option>
        <option>15 days</option>
    </select>
)

const monthlyToggle = () => (
    <div className="form-control w-52">
        <label className="cursor-pointer label">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-secondary" checked />
        </label>
    </div>
)

const settings = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
)

const statistics = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
        <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
    </svg>
)

// https://stackoverflow.com/a/61176559
/* const useData = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: undefined,
    status: "loading"
  });

  useEffect(() => {
    fetchData_fakeApi().then(test => {
      if (test.ok) dispatch(["success", test.data.results]);
    });
  }, []);

  return state;
};

const reducer = (state, [status, payload]) => {
  if (status === "success") return { ...state, data: payload, status };
  // e.g. make sure to reset data, when loading.
  else if (status === "loading") return { ...state, data: undefined, status };
  else return state;
};

const App = () => {
  const { data, status } = useData();
  const count = useRenderCount();
  const countStr = `Re-rendered ${count.current} times`;

  return status === "loading" ? (
    <div> Loading (3 sec)... {countStr} </div>
  ) : (
    <div>
      Finished. Data: {JSON.stringify(data)}, {countStr}
    </div>
  );
}

//
// helpers
//

const useRenderCount = () => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });
  return renderCount;
};

const fetchData_fakeApi = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ ok: true, data: { results: [1, 2, 3] } }), 3000)
  );

ReactDOM.render(<App />, document.getElementById("root")); */
