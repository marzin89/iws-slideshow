import Tests from './api-endpoints/tests';
import Solutions from './api-endpoints/solutions';
import Courses from './api-endpoints/courses';
import Posts from './api-endpoints/posts';
import Users from './api-endpoints/users';
import Comments from './api-endpoints/comments';
import Searches from './api-endpoints/searches';

const RestApiEndpoints = () => {
    return (
        <div id="text-wrapper-api">
            <h1>REST-webbtjänst (endpoints, CRUD, statuskoder)</h1>
            <div className="row-database">
                <Tests />
                <Solutions />
            </div>
            <div className="row-database">
                <Courses />
                <Posts />
            </div>
            <div className="row-database">
                <Users />
                <Comments />
            </div>
            <div className="row-database">
                <Searches />
                    <table className="api-right">
                        <thead>
                            <th>Kategori</th>
                            <th>Endpoints</th>
                            <th>CRUD-funktioner</th>
                            <th>Statuskoder</th>
                        </thead>
                        <tbody>
                            <tr className="table-bright">
                                <td className="table-left">Inloggning</td>
                                <td><i>/login</i></td>
                                <td>POST</td>
                                <td>500, 404, 200</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default RestApiEndpoints;