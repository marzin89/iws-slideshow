const Users = () => {
    return (
        <table className="api-left">
            <thead>
                <th>Kategori</th>
                <th>Endpoint</th>
                <th>CRUD-funktion</th>
                <th>Statuskoder</th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">Användare</td>
                    <td><i>/users/password/:password</i></td>
                    <td>GET (Admin)</td>
                    <td>401, 500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/users/password/:password</i></td>
                    <td>POST</td>
                    <td>401, 500, 201</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/users/password/:password/id/:id</i></td>
                    <td>PUT</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/users/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Users;