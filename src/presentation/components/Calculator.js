import {Slider, Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@material-ui/core'

function TypeOfCustomer(){
    return(
        <div className={'flex flex-row space-between'}>
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
        <FormControl component="fieldset">
             <FormLabel component="legend">What type of loan would you like?</FormLabel>
                <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
                >
                        <FormControlLabel value="salary" control={<Radio />} label="Salary advances" />
                        <FormControlLabel value="collateral " control={<Radio />} label="Collateral Backend" />
                        <FormControlLabel value="instant " control={<Radio />} label="instant loans" />
                </RadioGroup>
        
             
        </FormControl>
    )
}

function Estimates(props){
    return(
        <div className={'flex flex-column estimates'}>
            <div className={'flex flex-row space-between estimate'}>
                <p>Service fee</p>
                <p>K50</p>
            </div>
            <div className={'flex flex-row space-between  estimate'}>
                <p>Amount You Receive</p>
                <p>K50</p>
            </div>
            <div className={'flex flex-row space-between  estimate'}>
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
        <div className={'flex flex-column center calculator'}>
            <Header />
            <Sliders />
            <LoanType />
            <Estimates />
            <SubmitButton />
        </div>
      );
}
 
export default Calculator;