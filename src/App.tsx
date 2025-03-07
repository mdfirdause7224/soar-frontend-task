import { useState } from 'react'
import './App.css'
import chipLogo from './assets/download.svg'
import reactLogo from './assets/react.svg'

// Unable to resolve path to module '/vite.svg'.eslintimport/no-unresolved
const viteLogo = '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  // 'test' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
  // const test = 123
  // console.log('aaa')

  // const f = [1, 2, 3, 4, 5].filter((n) => n % 2 === 0)

  return (
    <>
      <div>
        {/* Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendationseslintreact/jsx-no-target-blank */}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.eslintjsx-a11y/alt-text */}
      <img src="" alt="" />
      <h1>
        <button type="button">Click Me</button>
      </h1>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className="creditCard rounded-3xl text-white text-left">
        <div className="leading-2">
          <div className="firstLine flex pl-5 gap-40">
            <div className="balance pt-8">
              <div className="check font-light text-sm leading-3">Balance</div>
              <div className="number font-bold text-lg tracking-wide">&#36;5,756</div>
            </div>
            <div>
              <img className="logo chip" src={chipLogo} alt="chip logo" />
            </div>
          </div>
          <div className="secondLine flex gap-10 pl-5 pb-5">
            <div>
              <div className="holder font-light text-xs">CARD HOLDER</div>
              <div className="name font-semibold">Eddy Cusuma</div>
            </div>
            <div>
              <div className="time font-light text-xs">VALID THRU</div>
              <div className="date font-thick">12&#47;22</div>
            </div>
          </div>
        </div>
        <div className="cardNumber pl-5 flex gap-7">
          <div className="details font-semibold text-xl pl-3 pt-4 pb-6 tracking-wider">
            3778&#160;&#42;&#42;&#42;&#42;&#160;&#42;&#42;&#42;&#42;&#160;1234
          </div>
          <div className="icon flex pt-4">
            <div className="h-8 w-8 rounded-full opacity-60 bg-white"></div>
            <div className="h-8 w-8 -ml-4 rounded-full opacity-60 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
