import './manager.css';
import { v4 } from 'uuid';
import TransactionItem from '../transactionItem/item';
import MoneyDetails from '../moneyDetails/details';
import React from 'react';

//an array that represents transaction types: income and expenses
const transactionTypeOptions = [
    {
        optionId: 'INCOME',
        displayText: 'Income',
    },
    {
        optionId: 'EXPENSES',
        displayText: 'Expenses',
    },
];

class MoneyManager extends React.Component {
    state = {
        transactionsList: [],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
    }

    deleteTransaction = id => {
        const {transactionsList} = this.state;
        const updatedTransactionList = transactionsList.filter(
        eachTransaction => id !== eachTransaction.id,
    )
        this.setState({
        transactionsList: updatedTransactionList,
    })
    }


    onAddTransaction = event => {
            event.preventDefault()
            const {titleInput, amountInput, optionId} = this.state
            const typeOption = transactionTypeOptions.find(
        eachTransaction => eachTransaction.optionId === optionId,
    )
            const {displayText} = typeOption
            const newTransaction = {
        id: v4(),
        title: titleInput,
        amount: parseInt(amountInput),
        type: displayText,
    }
    this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
    }))
    }

    onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
    }

    onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
    }

    onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
    }

    getExpenses = () => {
        const {transactionsList} = this.state
        let expensesAmount = 0

        transactionsList.forEach(eachTransaction => {
        if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
        }
    })

    return expensesAmount;
    }

    getIncome = () => {
        const {transactionsList} = this.state
        let incomeAmount = 0
        transactionsList.forEach(eachTransaction => {
        if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount;
        }
    })

    return incomeAmount;
    }

    getBalance = () => {
    const {transactionsList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
        if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
        } else {
        expensesAmount += eachTransaction.amount
        }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
    }

    render() {
        const {titleInput, amountInput, optionId, transactionsList} = this.state
        const balanceAmount = this.getBalance()
        const incomeAmount = this.getIncome()
        const expensesAmount = this.getExpenses()

        return (
        <div className="app-container">
        <div className="responsive-container">
            <div className="header-container">
            <h1 className="heading">Finance Tracker &#128176;</h1>
            </div>
            <MoneyDetails
                balanceAmount={balanceAmount}
                incomeAmount={incomeAmount}
                expensesAmount={expensesAmount}
            />
            <div className="transaction-details">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
                <h1 className="transaction-header">Add Transaction</h1>
                <label className="input-label" htmlFor="title">
                    TITLE
                </label>
                <input
                    type="text"
                    id="title"
                    value={titleInput}
                    onChange={this.onChangeTitleInput}
                    className="input"
                />
                <label className="input-label" htmlFor="amount">
                    AMOUNT
                </label>
                <input
                    type="text"
                    id="amount"
                    className="input"
                    value={amountInput}
                    onChange={this.onChangeAmountInput}
                />
                <label className="input-label" htmlFor="select">
                    TYPE
                </label>
                <select
                    id="select"
                    className="input"
                    value={optionId}
                    onChange={this.onChangeOptionId}
                >
                    {transactionTypeOptions.map(eachOption => (
                    <option key={eachOption.optionId} value={eachOption.optionId}>
                        {eachOption.displayText}
                    </option>
                ))}
                </select>
                <button type="submit" className="button">ADD</button>
            </form>
            <div className='hTransactions'>
            <div className="history-transactions">
                <h1 className="transaction-header">History</h1>
                <div className="transactions-table-container">
                    <ul className="transactions-table">
                    <li className="table-header">
                        <p className="table-header-cell" >Title</p>
                        <p className="table-header-cell" >Amount</p>
                        <p className="table-header-cell" >Type</p>
                    </li>
                    {transactionsList.map(eachTransaction => (
                    <TransactionItem
                        key={eachTransaction.id}
                        transactionDetails={eachTransaction}
                        deleteTransaction={this.deleteTransaction}
                    />
                    ))}
                </ul>
                </div>
            </div>
            </div>
                
            </div>
        </div>
        </div>
    )
    }
}

export default MoneyManager;