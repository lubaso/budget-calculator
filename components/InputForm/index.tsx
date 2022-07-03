import styles from './index.module.css'

export interface InputFormProps {
    isNegative?: boolean
    value: number
    description: string
}

export const InputForm = ({ isNegative, value, description }: InputFormProps) => {
    //const label = isNegative ? 'Expenses' : 'Income'
    return (<div className={isNegative ? styles.isNegative : styles.isPositive}>
        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)}
    </div>)
}