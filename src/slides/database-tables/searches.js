const Searches = () => {
    return (
        <table id="searches">
            <thead>
                <th>searches</th>
                <th></th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">id:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">foreignKey:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">title:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">content:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">language:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">path:</td>
                    <td>String</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Searches;