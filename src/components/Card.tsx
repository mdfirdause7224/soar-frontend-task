import chipLogo from '../assets/download.svg'

function Card() {
  return (
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
  )
}

export default Card
