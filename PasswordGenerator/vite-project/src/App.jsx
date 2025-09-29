import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "123456789";
    if (charAllow) str += "!@#$%^&*`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [charAllow, length, numAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllow, numAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-black bg-gray-700 text-center'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' ref={passwordRef} />
        <button className='outline-none bg-blue-700 text-white px-4 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy </button>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={8} max={50} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor="">Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id="numberInput" onChange={() => { setNumAllow((prev) => !prev) }} />
            <label htmlFor="">Numbers</label>
            <input type="checkbox" defaultChecked={charAllow} id="charInput" onChange={() => { setCharAllow((prev) => !prev) }} />
            <label htmlFor="">characters</label>

          </div>

        </div>
      </div>


    </>
  )

}




export default App
