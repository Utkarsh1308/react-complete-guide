import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;