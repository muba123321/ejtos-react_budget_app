import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const {expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

 const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert("You cannot set the budget value lower than the total spending!");
        } else {
            setNewBudget(event.target.value);
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
