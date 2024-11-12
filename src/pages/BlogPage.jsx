import React from 'react'
import NavBar from '../components/NavBar'
import BlogImg1 from '../assets/image/blog-det1.png'
import BlogImg2 from '../assets/image/blog-det2.png'
import BlogImg3 from '../assets/image/blog-det3.png'
import DetailsForm from '../components/DetailsForm'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function BlogPage() {
    return (
        <div className='blogpage'>
            <NavBar />
            <div className="blog-details">
                <div className="container px-5">
                    <div className="breadcrumb">
                        <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Exterior Compacts</a> </p>
                    </div>
                </div>
                <div className="container px-5 single-blog">
                    <h1 className='blog-heading'>The Benefits of High Gloss Laminates </h1>
                    <img src={BlogImg1} alt="blog image" />
                    <p className='date'>17th April 2024</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="another-content">
                <div className="container px-5">
                    <h2>Qu’est-ce qui vous a poussé vers le design d’intérieur?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={BlogImg2} alt="blog img2" />
                    <h2>Vous avez étudié la musicothérapie; en quoi cela influence-t-il
                        votre travail actuel?</h2>
                    <p>La musicothérapie utilise la musique pour soigner et réconforter. Elle sert à stimuler, apaiser, voire
                        libérer les émotions. Elle m'a enseigné l'écoute, la patience et la compréhension. Des qualités
                        essentielles dans le design d'intérieur. Tout comme en musicothérapie, je dois décrypter les besoins
                        de mes clients pour concevoir des espaces qui leur ressemblent, où ils peuvent s'épanouir.</p>
                    <h2>Pourquoi avoir créé Sarah Brown Design?</h2>
                    <p>Après avoir travaillé en tant que cuisiniste et designer pigiste, j'ai ressenti le besoin de proposer
                        une expérience plus personnalisée. J'ai donc fondé Sarah Brown Design en 2010, fortifiant mon
                        réseau professionnel et offrant à mes clients une approche globale, de la conception à la
                        réalisation.</p>
                    <h2>Quelle est la philosophie de Sarah Brown Design?</h2>
                    <p>Mon ambition est simple: métamorphoser les espaces de vie en lieux apaisants et fonctionnels. Je
                        crois fermement qu'un espace bien conçu a le pouvoir d'enrichir notre quotidien. C'est pourquoi
                        mon entreprise ne se contente pas de créer de beaux intérieurs, mais elle vise également à les
                        rendre organisés et pratiques.</p>
                    <img src={BlogImg3} alt="blog image 2" />
                    <h2>Quels défis avez-vous rencontrés dans votre carrière et comment
                        les avez-vous surmontés?</h2>
                    <p>Comme tout entrepreneur, mon parcours n'a pas été sans obstacles. Équilibrer les attentes des
                        clients avec ma vision créative est toujours un acte délicat. Au début, j'ai parfois eu du mal à
                        communiquer l'importance de certains choix de design, ce qui a conduit à des compromis qui
                        n'exploitaient pas pleinement le potentiel d'un espace. Mais avec le temps, j'ai appris la valeur d'une
                        communication efficace et de la collaboration. Impliquer les clients dans le processus de design,
                        comprendre leurs perspectives et les éduquer sur les nuances du design a été crucial pour garantir
                        que le résultat final soit à la fois fonctionnel et esthétiquement plaisant.</p>

                    <h2>Des conseils pour les designers d'intérieur en herbe?</h2>

                    <p>Pour ceux qui aspirent à laisser leur empreinte dans le monde du design d'intérieur, mon conseil est
                        de rester curieux et toujours ouvert à l'apprentissage. Le domaine est en constante évolution, avec
                        de nouvelles tendances, matériaux et technologies qui émergent tout le temps. Restez informé,
                        participez à des ateliers et n'hésitez jamais à chercher un mentorat. Mais surtout, trouvez votre voix
                        unique. Bien qu'il soit essentiel de comprendre les normes et les tendances de l'industrie, c'est
                        votre touche personnelle qui vous distinguera. Et n'oubliez pas, chaque espace que vous concevez
                        a le pouvoir d'influencer le quotidien de quelqu'un – abordez chaque projet avec empathie, passion
                        et une touche de magie.</p>
                        <div className="line"></div>

                </div>
            </div>
            <Blog/>
            <DetailsForm/>
            <Footer/>
        </div>
    )
}

export default BlogPage