const Posts = () => {
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
                    <td className="table-left">Blogginlägg</td>
                    <td><i>/posts/admin/user/:username/</i></td>
                    <td>GET (Admin, gästskribenter)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/posts/admin</i></td>
                    <td>GET (Admin, alla inlägg)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/posts</i></td>
                    <td>GET (publik webbplats, alla inlägg)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/posts/id/:id</i></td>
                    <td>GET(publik webbplats, enskilt inlägg)</td>
                    <td>500, 404, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/posts/password/:password</i></td>
                    <td>POST</td>
                    <td>401, 500, 201</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/posts/password/:password/id/:id</i></td>
                    <td>PUT (uppdatering)</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/posts/id/:id/comments/true</i></td>
                    <td>PUT (första kommentaren)</td>
                    <td>500, 200</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left"></td>
                    <td><i>/posts/password/:password/id/:id/publish</i></td>
                    <td>PUT (publicering)</td>
                    <td>401, 500, 200</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left"></td>
                    <td><i>/posts/password/:password/id/:id</i></td>
                    <td>DELETE</td>
                    <td>401, 500, 200</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Posts;