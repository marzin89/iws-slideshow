const Searches = () => {
    return (
        <table className="api-left">
            <thead>
                <th>Kategori</th>
                <th>Endpoints</th>
                <th>CRUD-funktioner</th>
                <th>Statuskoder</th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">Söktabell</td>
                    <td><i>/search</i></td>
                    <td>GET</td>
                    <td>500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/search/password/:password</i></td>
                    <td>POST</td>
                    <td>401, 500, 201</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/search/password/:password/id/:id</i></td>
                    <td>PUT</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/search/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Searches;