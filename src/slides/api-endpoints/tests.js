const Tests = () => {
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
                    <td className="table-left">Tester</td>
                    <td><i>/tests/admin</i></td>
                    <td>GET (Admin)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/tests</i></td>
                    <td>GET (publik webbplats)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/tests/id/:id</i></td>
                    <td>GET (publik webbplats)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/tests/password/:password</i></td>
                    <td>POST</td>
                    <td>401, 500, 201</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/tests/password/:password/id/:id</i></td>
                    <td>PUT</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/tests/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Tests;