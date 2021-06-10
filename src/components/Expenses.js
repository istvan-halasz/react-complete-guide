import './Expenses.css';
import './ExpenseItem'
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const expenses = props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ));
    return (
        <div className='expenses'>
            {expenses}
        </div>
    );
}

export default Expenses;