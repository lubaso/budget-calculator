import styles from './index.module.css'

export interface ExpenseSummaryProps {
    isNegative?: boolean,
    amount: number
}

export const ExpenseSummary = ({ isNegative, amount }: ExpenseSummaryProps) => {
    const label = isNegative ? 'Expenses' : 'Income'
    return (<div className={isNegative ? styles.isNegative : styles.isPositive}>
        {label} {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)}
    </div>)
}