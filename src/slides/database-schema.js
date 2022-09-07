import Tests from './database-tables/tests';
import Solutions from './database-tables/solutions';
import Courses from './database-tables/courses';
import Posts from './database-tables/posts';
import Users from './database-tables/users';
import Comments from './database-tables/comments';
import Searches from './database-tables/searches';

const DatabaseSchema = () => {
    return (
        <div id="text-wrapper-database">
            <h1>Databasschema</h1>
            <div className="row-database">
                <Tests />
                <Solutions />
                <Courses />
            </div>
            <div className="row-database">
                <Posts />                
                <Users />
                <Comments />
            </div>
            <Searches />
        </div>
    )
}

export default DatabaseSchema;