import {Slider} from '@material-ui/core'
function TypeOfCustomer(){
    return(
        <div className={'flex flex-row '}>
                <button>New Customer</button>
                <button>Returning Customer</button>
         </div>
    )
}
function Header(){
    return(
        <div>
            <h2>Get a loan</h2>
            <TypeOfCustomer />
        </div>
    )
}
function Sliders(){
    return(
        <div className='flex flex-column'>
            <div>
                <p>How much would you like?</p>
                <Slider
                    valueLabelDisplay="auto"
                    step={200}
                    min={500}
                    max={50000}
                />
            </div>
            <div>
                <p>For how many months?</p>
                <Slider 
                    valueLabelDisplay="auto"
                    max={12}
                />
            </div>
            
        </div>
    )
}
function LoanType(){
    return(
        <form>
             <p>loan type</p>
                <div className={'flex flex-column'} >
                    <div className={'flex flex-row'}>
                        
                        <input type="radio" id="html" name="loantype" value="Salary"></input>
                        <label for="Salary">Salary advances</label>
                    </div>
                    <div className={'flex flex-row '}>
                        <input type="radio" id="html" name="loantype" value="Salary"></input>
                        <label for="Salary">Collateral Backed</label>
                    </div>
                    <div className={'flex flex-row'}>
                        <input type="radio" id="html" name="loantype" value="Salary"></input>
                        <label for="Salary">instant loans</label>
                    </div>
                </div>
             
        </form>
    )
}

function Estimates(props){
    return(
        <div className={'flex flex-column'}>
            <div className={'flex flex-row space-between'}>
                <p>Service fee</p>
                <p>K50</p>
            </div>
            <div className={'flex flex-row space-between'}>
                <p>Amount You Receive</p>
                <p>K50</p>
            </div>
            <div className={'flex flex-row space-between'}>
                <p>Repayment</p>
                <p>K50</p>
            </div>
            <div className={'flex flex-row space-between'}>
                <p>Next Payment Date</p>
                <p>31/10/20</p>
            </div>
        </div>
    )
}
function SubmitButton(){
    return(
        <div className={'flex flex-row space-between'}> 
            <button>Check eligibility</button>
        </div>
    )
}
const Calculator = () => {
    return (
        <div className={'flex flex-column center'}>
            <Header />
            <Sliders />
            <LoanType />
            <Estimates />
            <SubmitButton />
        </div>
      );
}
 
export default Calculator;