const OverviewPublicWebsite = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Sida/<i>Komponent</i></th>
                    <th>Underkomponent(er)</th>
                    <th>Route(s)</th>
                    <th>Props (data)</th>
                    <th>Props (funktioner)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Start/<i>Home</i></td>
                    <td>Statiskt innehåll på svenska, statiskt innehåll på tyska,
                        inlägg innehåll på svenska, inlägg innehåll på tyska</td>
                    <td><i>/, /home, /*</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Om oss/<i>About</i></td>
                    <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                    <td><i>/about</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Kontakt/<i>Contact</i></td>
                    <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                    <td><i>/contact</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Tjänster/<i>Services</i></td>
                    <td>Tester innehåll på svenska, tester innehåll på tyska,
                        utveckling innehåll på svenska, utveckling innehåll på tyska,
                        utbildningar innehåll på svenska, utbildningar innehåll på tyska</td>
                    <td><i>/services</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Blogg/<i>Blog</i></td>
                    <td>Inlägg på svenska, Inlägg på tyska</td>
                    <td><i>/blog</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Om webbtillgänglighet/<i>Accessibility</i></td>
                    <td>Statiskt innehåll på svenska, statiskt innehåll på tyska</td>
                    <td><i>/accessibility</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Sökresultat/<i>Search</i></td>
                    <td>Sökresultat på svenska, Sökresultat på tyska</td>
                    <td><i>/search</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Undersida för inlägg/<i>Post</i></td>
                    <td>Inlägget på svenska, undermenyn på svenska, kommentarformuläret på svenska,
                        inlägget på tyska, undermenyn på tyska, kommentarformuläret på tyska,
                        kommentarer</td>
                    <td><i>/post</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
                <tr>
                    <td>Undersida för tjänster/<i>Test, Solution och Course</i></td>
                    <td>Tjänsten på svenska, undermenyn på svenska,
                        tjänsten på tyska, undermenyn på tyska</td>
                    <td><i>/post</i></td>
                    <td>Status för inloggning</td>
                    <td>Utloggning</td>
                </tr>
            </tbody>
        </table>
    )
}