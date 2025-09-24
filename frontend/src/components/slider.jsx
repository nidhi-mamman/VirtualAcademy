import autocad from '../images/autocad.png'
import solidworks from '../images/solidwork.png'
import catia from '../images/catia.png'
import creo from '../images/creo.webp'
import fusion from '../images/fusion.png'
import revit from '../images/revit.png'

const Slider = () => {
    return (
        <>
            {/* <!-- Modern Tech Stack Section --> */}
            <section class="tech-stack-section mb-5">
                <div class="container">
                    {/* <!-- Section Header --> */}
                    <div class="tech-header">
                        <h2 class="tech-title">🚀 Technologies We Master</h2>
                        <p class="tech-subtitle">
                            From <strong>AI</strong> to <strong>Cloud</strong>, from <strong>Web Development</strong> to <strong>CAD/CAM</strong> –
                            we train you on the latest and most in-demand technologies to build a successful career.
                        </p>
                    </div>

                    {/* <!-- Modern Category Navigation --> */}
                    <div class="tech-nav-container">
                        <div class="tech-nav-wrapper">

                            {/* <!-- Programming --> */}
                            <div class="category-tab active" data-category="programming">
                                <div class="tab-icon">💻</div>
                                <span>Programming</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- Frameworks --> */}
                            <div class="category-tab" data-category="frameworks">
                                <div class="tab-icon">⚡</div>
                                <span>Frameworks</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- AI & ML --> */}
                            <div class="category-tab" data-category="ai">
                                <div class="tab-icon">🤖</div>
                                <span>AI & ML</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- CAD / CAM --> */}
                            <div class="category-tab" data-category="cad">
                                <div class="tab-icon">📐</div>
                                <span>CAD / CAM</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- Databases --> */}
                            <div class="category-tab" data-category="databases">
                                <div class="tab-icon">🗄️</div>
                                <span>Databases</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- DevOps --> */}
                            <div class="category-tab" data-category="devops">
                                <div class="tab-icon">🔧</div>
                                <span>DevOps</span>
                                <div class="tab-glow"></div>
                            </div>

                            {/* <!-- Cloud --> */}
                            <div class="category-tab" data-category="cloud">
                                <div class="tab-icon">☁️</div>
                                <span>Cloud</span>
                                <div class="tab-glow"></div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <!-- Ultra-Modern Marquee Container --> */}
                <div class="tech-showcase">

                    {/* <!-- Programming Languages (Default Active) --> */}
                    <div class="tech-marquee active" data-category="programming">
                        <div class="marquee-track">

                            {/* <!-- C --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">C</span>
                                    <span class="tech-type">System</span>
                                </div>
                                <div class="tech-glow c"></div>
                            </div>

                            {/* <!-- C++ --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">C++</span>
                                    <span class="tech-type">System</span>
                                </div>
                                <div class="tech-glow cpp"></div>
                            </div>

                            {/* <!-- C# --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" alt="C#"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">C#</span>
                                    <span class="tech-type">.NET</span>
                                </div>
                                <div class="tech-glow csharp"></div>
                            </div>

                            {/* <!-- Java --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Java</span>
                                    <span class="tech-type">Enterprise</span>
                                </div>
                                <div class="tech-glow java"></div>
                            </div>

                            {/* <!-- Python --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Python</span>
                                    <span class="tech-type">AI/ML</span>
                                </div>
                                <div class="tech-glow python"></div>
                            </div>

                            {/* <!-- JavaScript --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">JavaScript</span>
                                    <span class="tech-type">Web</span>
                                </div>
                                <div class="tech-glow js"></div>
                            </div>

                            {/* <!-- TypeScript --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">TypeScript</span>
                                    <span class="tech-type">Web</span>
                                </div>
                                <div class="tech-glow ts"></div>
                            </div>

                            {/* <!-- PHP --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">PHP</span>
                                    <span class="tech-type">Backend</span>
                                </div>
                                <div class="tech-glow php"></div>
                            </div>

                            {/* <!-- Ruby --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="Ruby"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Ruby</span>
                                    <span class="tech-type">Backend</span>
                                </div>
                                <div class="tech-glow ruby"></div>
                            </div>

                            {/* <!-- Go --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Go"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Go</span>
                                    <span class="tech-type">System</span>
                                </div>
                                <div class="tech-glow go"></div>
                            </div>

                            {/* <!-- Swift --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" alt="Swift"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Swift</span>
                                    <span class="tech-type">iOS</span>
                                </div>
                                <div class="tech-glow swift"></div>
                            </div>

                            {/* <!-- Kotlin --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Kotlin</span>
                                    <span class="tech-type">Android</span>
                                </div>
                                <div class="tech-glow kotlin"></div>
                            </div>

                            {/* <!-- R --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" alt="R"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">R</span>
                                    <span class="tech-type">Data Science</span>
                                </div>
                                <div class="tech-glow r"></div>
                            </div>

                            {/* <!-- MATLAB --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="MATLAB"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">MATLAB</span>
                                    <span class="tech-type">Math/Sim</span>
                                </div>
                                <div class="tech-glow matlab"></div>
                            </div>

                            {/* <!-- Scala --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" alt="Scala"/>
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Scala</span>
                                    <span class="tech-type">Big Data</span>
                                </div>
                                <div class="tech-glow scala"></div>
                            </div>

                        </div>
                    </div>


                    <div class="tech-marquee" data-category="frameworks" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- React --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">React</span>
                                    <span class="tech-type">Frontend</span>
                                </div>
                                <div class="tech-glow react"></div>
                            </div>

                            {/* <!-- Vue.js --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Vue.js</span>
                                    <span class="tech-type">Progressive</span>
                                </div>
                                <div class="tech-glow vue"></div>
                            </div>

                            {/* <!-- Angular --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Angular</span>
                                    <span class="tech-type">Enterprise</span>
                                </div>
                                <div class="tech-glow angular"></div>
                            </div>

                            {/* <!-- Node.js --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Node.js</span>
                                    <span class="tech-type">Backend</span>
                                </div>
                                <div class="tech-glow node"></div>
                            </div>

                            {/* <!-- Django --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Django</span>
                                    <span class="tech-type">Python</span>
                                </div>
                                <div class="tech-glow django"></div>
                            </div>

                            {/* <!-- Flask --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Flask</span>
                                    <span class="tech-type">Micro</span>
                                </div>
                                <div class="tech-glow flask"></div>
                            </div>

                            {/* <!-- Spring Boot --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Spring Boot</span>
                                    <span class="tech-type">Java</span>
                                </div>
                                <div class="tech-glow spring"></div>
                            </div>

                            {/* <!-- Express.js --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Express.js</span>
                                    <span class="tech-type">Backend</span>
                                </div>
                                <div class="tech-glow express"></div>
                            </div>

                            {/* <!-- Laravel --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Laravel</span>
                                    <span class="tech-type">PHP</span>
                                </div>
                                <div class="tech-glow laravel"></div>
                            </div>


                            {/* <!-- Next.js --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Next.js</span>
                                    <span class="tech-type">React SSR</span>
                                </div>
                                <div class="tech-glow next"></div>
                            </div>

                            {/* <!-- Nuxt.js --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Nuxt.js</span>
                                    <span class="tech-type">Vue SSR</span>
                                </div>
                                <div class="tech-glow nuxt"></div>
                            </div>

                        </div>
                    </div>

                    <div class="tech-marquee" data-category="ai" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- Artificial Intelligence --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="AI" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Artificial Intelligence</span>
                                    <span class="tech-type">AI</span>
                                </div>
                                <div class="tech-glow ai"></div>
                            </div>

                            {/* <!-- Machine Learning --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Machine Learning" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Machine Learning</span>
                                    <span class="tech-type">ML</span>
                                </div>
                                <div class="tech-glow ml"></div>
                            </div>

                            {/* <!-- Deep Learning --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Deep Learning" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Deep Learning</span>
                                    <span class="tech-type">Neural Nets</span>
                                </div>
                                <div class="tech-glow dl"></div>
                            </div>

                            {/* <!-- NLP --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="NLP" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Natural Language Processing</span>
                                    <span class="tech-type">NLP</span>
                                </div>
                                <div class="tech-glow nlp"></div>
                            </div>

                            {/* <!-- Data Science --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Data Science" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Data Science</span>
                                    <span class="tech-type">Analytics</span>
                                </div>
                                <div class="tech-glow ds"></div>
                            </div>


                            {/* <!-- TensorFlow --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">TensorFlow</span>
                                    <span class="tech-type">Framework</span>
                                </div>
                                <div class="tech-glow tf"></div>
                            </div>

                            {/* <!-- PyTorch --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">PyTorch</span>
                                    <span class="tech-type">Framework</span>
                                </div>
                                <div class="tech-glow torch"></div>
                            </div>

                        </div>
                    </div>



                    <div class="tech-marquee" data-category="cad" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- AutoCAD --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/AutoCad_new_logo.svg" alt="AutoCAD" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">AutoCAD</span>
                                    <span class="tech-type">Design</span>
                                </div>
                                <div class="tech-glow autocad"></div>
                            </div>

                            {/* <!-- SolidWorks --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/??/??/SolidWorks_Logo.svg" alt="SolidWorks" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">SolidWorks</span>
                                    <span class="tech-type">3D CAD</span>
                                </div>
                                <div class="tech-glow solidworks"></div>
                            </div>

                            {/* <!-- CATIA --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/DS-CATIA-Logo.png" alt="CATIA" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">CATIA</span>
                                    <span class="tech-type">Engineering</span>
                                </div>
                                <div class="tech-glow catia"></div>
                            </div>

                            {/* <!-- Creo --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/.../PTC_Creo_logo.svg" alt="Creo" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Creo</span>
                                    <span class="tech-type">3D CAD</span>
                                </div>
                                <div class="tech-glow creo"></div>
                            </div>

                            {/* <!-- Fusion 360 --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/.../Fusion360_Logo.svg" alt="Fusion 360" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Fusion 360</span>
                                    <span class="tech-type">CAD/CAM</span>
                                </div>
                                <div class="tech-glow fusion"></div>
                            </div>

                            {/* <!-- Revit --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://brandlogos.net/revit-logo-png-vector-format-101623.html" alt="Revit" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Revit</span>
                                    <span class="tech-type">Architecture</span>
                                </div>
                                <div class="tech-glow revit"></div>
                            </div>

                        </div>
                    </div>

                    <div class="tech-marquee" data-category="databases" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- MySQL --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">MySQL</span>
                                    <span class="tech-type">Relational</span>
                                </div>
                                <div class="tech-glow mysql"></div>
                            </div>

                            {/* <!-- PostgreSQL --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">PostgreSQL</span>
                                    <span class="tech-type">Relational</span>
                                </div>
                                <div class="tech-glow postgres"></div>
                            </div>

                            {/* <!-- MongoDB --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">MongoDB</span>
                                    <span class="tech-type">NoSQL</span>
                                </div>
                                <div class="tech-glow mongo"></div>
                            </div>

                            {/* <!-- SQLite --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">SQLite</span>
                                    <span class="tech-type">Lightweight</span>
                                </div>
                                <div class="tech-glow sqlite"></div>
                            </div>

                            {/* <!-- Firebase --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Firebase</span>
                                    <span class="tech-type">Realtime</span>
                                </div>
                                <div class="tech-glow firebase"></div>
                            </div>

                            {/* <!-- Oracle --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Oracle</span>
                                    <span class="tech-type">Enterprise</span>
                                </div>
                                <div class="tech-glow oracle"></div>
                            </div>

                            {/* <!-- Microsoft SQL Server --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="MSSQL" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">MS SQL Server</span>
                                    <span class="tech-type">Enterprise</span>
                                </div>
                                <div class="tech-glow mssql"></div>
                            </div>

                            {/* <!-- Redis --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Redis</span>
                                    <span class="tech-type">In-Memory</span>
                                </div>
                                <div class="tech-glow redis"></div>
                            </div>

                        </div>
                    </div>

                    <div class="tech-marquee" data-category="devops" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- Git --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Git</span>
                                    <span class="tech-type">Version Control</span>
                                </div>
                                <div class="tech-glow git"></div>
                            </div>

                            {/* <!-- GitHub --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">GitHub</span>
                                    <span class="tech-type">Collaboration</span>
                                </div>
                                <div class="tech-glow github"></div>
                            </div>

                            {/* <!-- Docker --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Docker</span>
                                    <span class="tech-type">Containerization</span>
                                </div>
                                <div class="tech-glow docker"></div>
                            </div>

                            {/* <!-- Kubernetes --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Kubernetes</span>
                                    <span class="tech-type">Orchestration</span>
                                </div>
                                <div class="tech-glow k8s"></div>
                            </div>

                            {/* <!-- Jenkins --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" alt="Jenkins" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Jenkins</span>
                                    <span class="tech-type">CI/CD</span>
                                </div>
                                <div class="tech-glow jenkins"></div>
                            </div>

                            {/* <!-- Ansible --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="Ansible" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Ansible</span>
                                    <span class="tech-type">Automation</span>
                                </div>
                                <div class="tech-glow ansible"></div>
                            </div>

                            {/* <!-- Terraform --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" alt="Terraform" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Terraform</span>
                                    <span class="tech-type">IaC</span>
                                </div>
                                <div class="tech-glow terraform"></div>
                            </div>

                            {/* <!-- Prometheus --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" alt="Prometheus" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Prometheus</span>
                                    <span class="tech-type">Monitoring</span>
                                </div>
                                <div class="tech-glow prometheus"></div>
                            </div>

                            {/* <!-- Grafana --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="Grafana" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Grafana</span>
                                    <span class="tech-type">Visualization</span>
                                </div>
                                <div class="tech-glow grafana"></div>
                            </div>

                        </div>
                    </div>

                    <div class="tech-marquee" data-category="cloud" style={{display:"none"}}>
                        <div class="marquee-track">

                            {/* <!-- AWS --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">AWS</span>
                                    <span class="tech-type">Cloud Platform</span>
                                </div>
                                <div class="tech-glow aws"></div>
                            </div>

                            {/* <!-- Microsoft Azure --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Microsoft Azure</span>
                                    <span class="tech-type">Cloud Platform</span>
                                </div>
                                <div class="tech-glow azure"></div>
                            </div>

                            {/* <!-- Google Cloud --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Google Cloud</span>
                                    <span class="tech-type">Cloud Platform</span>
                                </div>
                                <div class="tech-glow gcp"></div>
                            </div>

                            {/* <!-- IBM Cloud --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.worldvectorlogo.com/logos/ibm-cloud-1.svg" alt="IBM Cloud" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">IBM Cloud</span>
                                    <span class="tech-type">Cloud Platform</span>
                                </div>
                                <div class="tech-glow ibm"></div>
                            </div>

                            {/* <!-- Oracle Cloud --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.worldvectorlogo.com/logos/oracle-6.svg" alt="Oracle Cloud" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Oracle Cloud</span>
                                    <span class="tech-type">Cloud Platform</span>
                                </div>
                                <div class="tech-glow oracle-cloud"></div>
                            </div>

                            {/* <!-- DigitalOcean --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt="DigitalOcean" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">DigitalOcean</span>
                                    <span class="tech-type">Cloud Hosting</span>
                                </div>
                                <div class="tech-glow do"></div>
                            </div>

                            {/* <!-- Heroku --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="Heroku" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Heroku</span>
                                    <span class="tech-type">PaaS</span>
                                </div>
                                <div class="tech-glow heroku"></div>
                            </div>

                            {/* <!-- Vercel --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" alt="Vercel" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Vercel</span>
                                    <span class="tech-type">Deployment</span>
                                </div>
                                <div class="tech-glow vercel"></div>
                            </div>

                            {/* <!-- Netlify --> */}
                            <div class="tech-card">
                                <div class="tech-icon">
                                    <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" alt="Netlify" />
                                </div>
                                <div class="tech-info">
                                    <span class="tech-name">Netlify</span>
                                    <span class="tech-type">Deployment</span>
                                </div>
                                <div class="tech-glow netlify"></div>
                            </div>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}

export default Slider