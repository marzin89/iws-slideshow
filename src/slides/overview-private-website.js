const OverviewPrivateWebsite = () => {
    return (
        <div id="text-wrapper">
            <h1>Struktur Admin</h1>
            <table>
                <thead>
                    <tr>
                        <th>Komponent</th>
                        <th>CRUD-funktionalitet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-bright">
                        <td><i>Admin</i></td>
                        <td>GET, POST, PUT och DELETE för tjänster, inlägg, använadare, 
                            kommentarer och söktabellen (ej bilduppladdning)</td>
                    </tr>
                    <tr className="table-dark">
                        <td><i>Services</i></td>
                        <td>Bilduppladdning samt POST, PUT och DELETE för tjänster via callback-funktioner</td>
                    </tr>
                    <tr className="table-bright">
                        <td><i>Posts</i></td>
                        <td>Bilduppladdning samt POST, PUT och DELETE för inlägg via callback-funktioner</td>
                    </tr>
                    <tr className="table-dark">
                        <td><i>Users</i></td>
                        <td>POST, PUT och DELETE för användare via callback-funktioner</td>
                    </tr>
                    <tr className="table-bright">
                        <td><i>Comments</i></td>
                        <td>PUT och DELETE för kommentarer via callback-funktioner</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverviewPrivateWebsite;