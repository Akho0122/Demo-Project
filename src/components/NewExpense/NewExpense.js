import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = ()=>{
        setIsEditing(true)
    }
        
    const stopEditingHandler = ()=>{
        setIsEditing(false)
    }

    const saveExpenseDataHandler =(enteredExpenseDate)=>{
        const expenseData ={
            ...enteredExpenseDate,
            id: Math.random().toString,
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm cancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;