const Users = () => {
    return (
        <table className="database-middle">
            <thead>
                <th>users</th>
                <th></th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">id:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">firstName:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">lastName:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">email:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">phone:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">username:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">password:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">userRole:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">blocked:</td>
                    <td>Boolean</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">updated:</td>
                    <td>Date</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Users;