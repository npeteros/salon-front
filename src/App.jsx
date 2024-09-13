function App() {
    return (
        <>
            <div className="bg-[#DCDFE9] min-h-screen w-full p-2 flex justify-center">
                <div className="bg-[#FFFFFF] rounded-2xl min-h-full w-5/6 grid grid-cols-2">
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <h1 className="font-bold text-4xl">Sign In</h1>
                        <div className="flex gap-2">
                            <div className="grid place-items-center py-2 px-4 rounded-md border">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.788 5.108A9 9 0 1 0 21 12h-8"></path>
                                </svg>
                            </div>
                            <div className="grid place-items-center py-2 px-4 rounded-md border">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z"></path>
                                </svg>
                            </div>
                            <div className="grid place-items-center py-2 px-4 rounded-md border">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
                                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
                                </svg>
                            </div>
                            <div className="grid place-items-center py-2 px-4 rounded-md border">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
                                    <path d="M8 11v5"></path>
                                    <path d="M8 8v.01"></path>
                                    <path d="M12 16v-5"></path>
                                    <path d="M16 16v-3a2 2 0 0 0-4 0"></path>
                                </svg>
                            </div>
                        </div>
                        <span>or use your email password</span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#EEEEEE] rounded-xl p-2 w-96"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-[#EEEEEE] rounded-xl p-2 w-96"
                        />
                        <span className="text-base">Forgot Your Password?</span>
                        <button className="bg-[#820000] rounded-xl py-2  text-white px-14 font-sans uppercase">
                            Sign IN
                        </button>
                    </div>
                    <div className="bg-[#820000] rounded-tl-[14rem] rounded-bl-[14rem] grid place-items-center">
                        <div className="flex flex-col items-center gap-6">
                            <h1 className="font-bold text-4xl text-white">
                                Sign Up
                            </h1>
                            <button className="bg-[#820000] rounded-md py-2  text-white px-14 font-sans uppercase outline outline-2 outline-offset-2 hover:bg-white hover:text-[#820000] hover:border-red-900">
                                REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

// function App() {
//     return (
//         <>
//             <div className="bg-[#DCDFE9] min-h-screen w-full p-2 flex justify-center">
//                 <div className="bg-[#FFFFFF] rounded-2xl min-h-full w-5/6 grid grid-cols-2">
//                     <div className='bg-[#820000] rounded-tr-[14rem] rounded-br-[14rem] grid place-items-center'>
//                         <div className="flex flex-col items-center gap-6">
//                             <h1 className='font-bold text-4xl text-white'>Sign Up</h1>
//                             <button className="bg-[#820000] rounded-md py-2  text-white px-14 font-sans uppercase outline outline-2 outline-offset-2 hover:bg-white hover:text-[#820000] hover:border-red-900">REGISTER</button>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-4 justify-center items-center'>
//                         <h1 className='font-bold text-4xl'>Sign In</h1>
//                         <div className='flex gap-2'>
//                             <div className="p-2 rounded-md border">
//                                 Google
//                             </div>
//                             <div className="p-2 rounded-md border">
//                                 Facebook
//                             </div>
//                             <div className="p-2 rounded-md border">
//                                 Github
//                             </div>
//                             <div className="p-2 rounded-md border">
//                                 LinkedIn
//                             </div>
//                         </div>
//                         <span>or use your email password</span>
//                         <input type='email' placeholder='Email' className='bg-[#EEEEEE] rounded-xl p-2 w-96' />
//                         <input type='password' placeholder='Password' className='bg-[#EEEEEE] rounded-xl p-2 w-96' />
//                         <span className="text-base">Forgot Your Password?</span>
//                         <button className="bg-[#820000] rounded-xl py-2  text-white px-14 font-sans uppercase">Sign IN</button>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default App
