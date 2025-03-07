import chipLogo from '../assets/download.svg'

function App() {
  return (
    <>
      <div className="creditCard">
        <div className="">
          <div className="firstLine">
            <div className="balance">
              <div className="check">Balance</div>
              <div className="number">&#36;5,756</div>
            </div>
            <div>
              <img className="logo chip" src={chipLogo} alt="chip logo" />
            </div>
          </div>
          <div className="secondLine">
            <div>
              <div className="holders">CARD HOLDER</div>
              <div className="name">Eddy Cusuma</div>
            </div>
            <div>
              <div className="times">VALID THRU</div>
              <div className="date">12&#47;22</div>
            </div>
          </div>
        </div>
        <div className="cardNumber">
          <div className="details">
            3778&#160;&#42;&#42;&#42;&#42;&#160;&#42;&#42;&#42;&#42;&#160;1234
          </div>
          <div className="icon">
            <div className="round1"></div>
            <div className="round2"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
