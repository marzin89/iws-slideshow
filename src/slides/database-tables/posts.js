const Posts = () => {
    return (
        <table className="database-left">
            <thead>
                <th>posts</th>
                <th></th>
            </thead>
            <tbody>
                <tr className="table-bright">
                    <td className="table-left">id:</td>
                    <td>Integer</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">title:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">date:</td>
                    <td>Date</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">content:</td>
                    <td>Array</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">imageUrl:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">altText:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">author:</td>
                    <td>String</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">published:</td>
                    <td>Boolean</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">comments:</td>
                    <td>Boolean</td>
                </tr>
                <tr className="table-dark">
                    <td className="table-left">language:</td>
                    <td>String</td>
                </tr>
                <tr className="table-bright">
                    <td className="table-left">updated:</td>
                    <td>Date</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Posts;