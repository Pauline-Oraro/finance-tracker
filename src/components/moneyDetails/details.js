import './details.css';

const MoneyDetails = props =>{
    const {balanceAmount, incomeAmount, expensesAmount} = props
    return (
        <div className="money-details-container">
            <div className="balance-container">
                <img 
                src = "/balance-sheet.png"
                alt="balance"
                className='details-img'
                />
                <div>
                    <p className='details-text'>Your Balance</p>
                    <p className='details-money' testid="balanceAmount"> Ksh {balanceAmount}</p>
                </div>
            </div>
            <div className='income-container'>
                <img 
                src = "/growth.png"
                alt='income'
                className='details-img'
                />
                <div>
                    <p className='details-text'>Your Income</p>
                    <p className='details-money' testid="incomeAmount">Ksh {incomeAmount}</p>
                </div>
            </div>
            <div className='expenses-container'>
                <img 
                src='/expenses.png'
                alt='expenses'
                className='details-img'
                />
                <div>
                    <p className='details-text'>Your Expenses</p>
                    <p className='details-money' testid="expensesAmount">Ksh {expensesAmount}</p>
                </div>
            </div>
        </div>
    )
}


export default MoneyDetails;