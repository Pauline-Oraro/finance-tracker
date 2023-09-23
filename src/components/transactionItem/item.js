import './item.css';


const TransactionItem = props => {
    const {transactionDetails, deleteTransaction} = props
    const {id, title, amount, type} = transactionDetails
    
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