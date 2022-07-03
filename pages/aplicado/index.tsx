import type { NextPage } from "next";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import { useState } from 'react'
import { InputForm } from "../../components/InputForm";

type MoneyState = {
    moneyExpent: number, moneyEarned: number
}

const AplicadoPage: NextPage = () => {
    // no futuro virao de um banco de dados
    const value = 1000
    const description = "Sou um gasto"

    const [{ moneyEarned, moneyExpent }, setMoney] = useState<MoneyState>({
        moneyExpent: 1234,
        moneyEarned: 4321
    })

    const spend10Euros = () => {
        setMoney({
            moneyExpent: moneyExpent + 10,
            moneyEarned
        })
    }
    return (<section>
        <ExpenseSummary amount={moneyEarned} />
        <ExpenseSummary isNegative amount={moneyExpent} />
        <InputForm value={value} description={description} />
        {/**TODO remover parte à baixo e tentar portar o formulário de gastos */}
        <button onClick={spend10Euros}>Gasta 10 euro</button>
    </section>)
}
export default AplicadoPage