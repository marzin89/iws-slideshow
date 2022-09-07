const Comments = () => {
    return (
        <table className="api-right">
            <thead>
                <th>Kategori</th>
                <th>Endpoints</th>
                <th>CRUD-funktioner</th>
                <th>Statuskoder</th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">Kommentarer</td>
                    <td><i>/comments/admin</i></td>
                    <td>GET (Admin)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/comments</i></td>
                    <td>GET (publik webbplats)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/comments/id/:id</i></td>
                    <td>GET (publik webbplats, enskilt inlägg)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/comments</i></td>
                    <td>POST</td>
                    <td>500, 201</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/comments/password/:password/id/:id/publish</i></td>
                    <td>PUT (publicering)</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/comments/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/comments/password/:password/postId/:postId</i></td>
                    <td>DELETE (enskilt inlägg)</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Comments;