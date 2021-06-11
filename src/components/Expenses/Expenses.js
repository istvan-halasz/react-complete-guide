import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const expenses = props.items.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ));
    return (
        <Card className='expenses'>
            {expenses}
        </Card>
    );
}

export default Expenses;