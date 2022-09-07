const TargetGroups = () => {
    return (
        <div id="text-wrapper">
            <h1>Målgrupper</h1>
            <h2>Publik webbplats</h2>
            <table>
                <tbody>
                    <tr className="table-dark">
                        <td className="table-left">Kön:</td>
                        <td>kvinnor och män</td>
                    </tr>
                    <tr className="table-bright">
                        <td className="table-left">Åldersgrupp:</td>
                        <td>över 18 år</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-left">Ursprung:</td>
                        <td>varierande, men kan svenska eller tyska</td>
                    </tr>
                    <tr className="table-bright">
                        <td className="table-left">Geografisk placering:</td>
                        <td>se ovan</td>
                    </tr> 
                    <tr className="table-dark">
                        <td className="table-left">Kan ha en funktionsnedsättning:</td>
                        <td>ja, men arbetsför eller kan använda en dator, mobiltelefon eller surfplatta</td>
                    </tr>
                </tbody>
            </table>
            <h2>Icke-publik webbplats</h2>
            <table>
                <tbody>
                    <tr className="table-dark">
                        <td className="table-left">Kön:</td>
                        <td>kvinnor och män</td>
                    </tr>
                    <tr className="table-bright">
                        <td className="table-left">Åldersgrupp:</td>
                        <td>över 18 år</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-left">Ursprung:</td>
                        <td>varierande, men kan svenska</td>
                    </tr>
                    <tr className="table-bright">
                        <td className="table-left">Geografisk placering:</td>
                        <td>se ovan</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-left">Inkomst:</td>
                        <td>alla (även arbetslösa)</td>
                    </tr>
                    <tr className="table-bright">
                        <td className="table-left">Intressen:</td>
                        <td>alla, men även it/webbutveckling och/eller tillgänglighet</td>
                    </tr>
                    <tr className="table-dark">
                        <td className="table-left">Kan ha en funktionsnedsättning:</td>
                        <td>ja, men arbetsför eller kan använda en dator, mobiltelefon eller surfplatta</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TargetGroups;