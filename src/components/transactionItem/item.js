import './item.css';


//display the history of the user's transactions
const TransactionItem = props => {
    const {transactionDetails, deleteTransaction} = props
    //represent the details of a transaction
    const {id, title, amount, type} = transactionDetails
    
    //it is called when the delete button is clicked
    const onDeleteTransaction = () => {
        deleteTransaction(id)
    }

    return (
        <li className='table-row'>
            <p className='transaction-text'>{title}</p>
            <p className='transaction-text'>Ksh {amount}</p>
            <p className='transaction-text'>{type}</p>
            <div className='delete-container'>
                <button className='delete-button' type='button' onClick={onDeleteTransaction} testid="delete">
                    <img 
                    className='delete-img'
                    src="/bin.png"
                    alt='delete'
                    />
                </button>
            </div>
        </li>
    )
}

export default TransactionItem;