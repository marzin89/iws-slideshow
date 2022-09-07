const Comments = () => {
    return (
        <table className="database-right">
            <thead>
                <th>comments</th>
                <th></th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">id:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">author:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">email:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">content:</td>
                    <td>Array</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">postId:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">postTitle:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">responses:</td>
                    <td>Boolean</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">responseTo:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">published:</td>
                    <td>Boolean</td>
                </tr>
                <tr className="table-dark"> 
                    <td className="table-left">date:</td>
                    <td>Date</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">updated:</td>
                    <td>Date</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Comments;