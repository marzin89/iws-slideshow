const OverviewPublicWebsite = () => {
    return (
        <div id="text-wrapper">
            <h1>Struktur och routing</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sida/<i>Komponent</i></th>
                        <th>Underkomponent(er)</th>
                        <th>Route(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-bright">
                        <td>Start/<i>Home</i></td>
                        <td>Statiskt innehåll på svenska, statiskt innehåll på tyska,
                            inlägg innehåll på svenska, inlägg innehåll på tyska</td>
                        <td><i>/, /home, /*</i></td>
                    </tr>
                    <tr className="table-dark">
                        <td>Om oss/<i>About</i></td>
                        <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                        <td><i>/about</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Kontakt/<i>Contact</i></td>
                        <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                        <td><i>/contact</i></td>
                    </tr>
                    <tr className="table-dark">
                        <td>Tjänster/<i>Services</i></td>
                        <td>Tester innehåll på svenska, tester innehåll på tyska,
                            utveckling innehåll på svenska, utveckling innehåll på tyska,
                            utbildningar innehåll på svenska, utbildningar innehåll på tyska</td>
                        <td><i>/services</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Blogg/<i>Blog</i></td>
                        <td>Inlägg på svenska, Inlägg på tyska</td>
                        <td><i>/blog</i></td>
                    </tr>
                    <tr className="table-dark">
                        <td>Om webbtillgänglighet/<i>Accessibility</i></td>
                        <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                        <td><i>/accessibility</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Sökresultat/<i>Search</i></td>
                        <td>Sökresultat på svenska, Sökresultat på tyska</td>
                        <td><i>/search</i></td>
                    </tr>
                    <tr className="table-dark">
                        <td>Undersida för inlägg/<i>Post</i></td>
                        <td>Inlägget på svenska, undermenyn på svenska, kommentarformuläret på svenska,
                            inlägget på tyska, undermenyn på tyska, kommentarformuläret på tyska,
                            kommentarer</td>
                        <td><i>/post</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Undersida för tester/<i>Test</i></td>
                        <td>Testet på svenska, undermenyn på svenska,
                            testet på tyska, undermenyn på tyska</td>
                        <td><i>/test</i></td>
                    </tr>
                    <tr className="table-dark">
                        <td>Undersida för utvecklingspaket/<i>Solution</i></td>
                        <td>Utvecklingspaketet på svenska, undermenyn på svenska,
                            utvecklingspaket på tyska, undermenyn på tyska</td>
                        <td><i>/solution</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Undersida för utbildningar/<i>Course</i></td>
                        <td>Utbildningen på svenska, undermenyn på svenska,
                            utbildningen på tyska, undermenyn på tyska</td>
                        <td><i>/course</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Admin/<i>Admin</i></td>
                        <td>Tjänster, blogginlägg, användare, kommentarer</td>
                        <td><i>/admin</i></td>
                    </tr>
                    <tr className="table-bright">
                        <td>Logga in/<i>Login</i></td>
                        <td>–</td>
                        <td><i>/login</i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OverviewPublicWebsite;