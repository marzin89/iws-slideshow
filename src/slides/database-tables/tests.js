const Tests = () => {
    return (
        <table className="database-left">
            <thead>
                <th>tests</th>
                <th></th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">id:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">name:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">price:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">description:</td>
                    <td>Array</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">imageUrl:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">altText:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">language:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">updated:</td>
                    <td>Date</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tests;