import { calculateInvestmentResults,formatter } from "../util/investment"

export default function Results({userInput}) {
    const results = calculateInvestmentResults(userInput);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results)
    return <table id="result">
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest Year</th>
            <th>Total Interset</th>
            <th>Invested Amount</th>
        </thead>
        <tbody>
            {results.map(result => {
               
                const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                const totalAmountInvested = result.valueEndOfYear - totalInterest;
                return <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })
            }
            
        </tbody>
    </table>

}