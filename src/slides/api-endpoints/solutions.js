const Solutions = () => {
    return (
        <table className="api-right">
            <thead>
                <th>Kategori</th>
                <th>Endpoint</th>
                <th>CRUD-funktion</th>
                <th>Statuskoder</th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">Utvecklingspaket</td>
                    <td><i>/solutions/admin</i></td>
                    <td>GET (Admin)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/solutions</i></td>
                    <td>GET (publik webbplats)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/solutions/id/:id</i></td>
                    <td>GET (publik webbplats)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/solutions/password/:password</i></td>
                    <td>POST</td>
                    <td>401, 500, 201</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/solutions/password/:password/id/:id</i></td>
                    <td>PUT</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/solutions/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Solutions;