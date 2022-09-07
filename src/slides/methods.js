const Methods = () => {
    return (
        <div id="text-wrapper">
            <h1>Metoder</h1>
            <div className="row">
                <div className="methods-left">
                    <h2>Planering</h2>
                    <ul>
                        <li>Sitemaps</li>
                        <li>Skisser</li>
                        <li>Moodboards</li>
                        <li>Flödesscheman</li>
                        <li>Målgruppsanalyser</li>
                    </ul>
                </div>
                <div className="methods-right">
                    <h2>Implementering</h2>
                    <ul>
                        <li>React</li>
                        <li>SASS</li>
                        <li>Node.js/Express.js</li>
                        <li>MongoDB</li>
                        <li>EmailJS</li>
                        <li>Cloudinary</li>
                        <li>React Router</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="methods-left">
                    <h2>Testning och testverktyg</h2>
                    <ul>
                        <li>Kompatibilitet (Firefox, Chrome, Edge, Opera)</li>
                        <li>Responsivitet (mobil)</li>
                        <li>Tillgänglighet (Lighthouse, Wave, Color Contrast Analyzer, skärmläsare och
                            två användartester, Steve Krug's mall)
                        </li>
                        <li>Validitet (W3C:s testverktyg)</li>
                    </ul>
                </div>
                <div className="methods-right">
                    <h2>Publicering</h2>
                    <ul>
                        <li>Heroku (webbplats och REST-webbtjänst)</li>
                        <li>MongoDB Atlas</li>
                        <li>GitHub (all källkod)</li>
                        <li>Webbplats på egen domän</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Methods;