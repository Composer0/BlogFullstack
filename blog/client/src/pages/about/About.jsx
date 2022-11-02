import "./about.css"

export default function About() {
    return (
        <>
        <div className="about">
            <h1 className="aboutHeader">ABOUT</h1>
            <h2 className="aboutHeaderSecondary">
                Orion Palmer
            </h2>
        </div>
                    <div className="overseer">
                        <div className="container">
                            <div className="card musician">
                                <div className="information">
                                    <p className="informationText">
                                    <span className="title">Musician</span><br/><br/>In the field of music I am a clarinetist, pianist, composer, and educator. Throughout my career in music I have served many roles within different ensembles ranging from principal clarinetist, soloist, and concert master. Outside of the performing, I regularly compose music for a variety of ensembles and projects. As a composer I won the MTNA Young Artist Composition Competition in the State of Georgia and my music has contributed to the success of student film shocase winner "Payton's Place". These feats were all accomplished while I was actively teaching music. Most recently I was recognized by my school, Chukker Creek Elementary, as Teacher of the Year, an honor I take great pride in as it was awarded to me exactly a decade after I first began teaching.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card programmer">
                                <div className="information">
                                    <p className="informationText"><span className="title">Programmer</span><br/><br/>As a programmer, I love to solve problems. Developing new software and customizing websites fuels my need to be creative on a daily basis. Since beginning my journey into software development I have learned and found ways to implement a variety of technologies including HTML, CSS, Bootstrap, JavaScript, jQuery, API Git, Sass React, Node, Express, MongoDB, and SQL. I love the idea that with technology, my potential to impact others is simply greater and I want to use my knowledge to craft intuitive products that aid people with what their needs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card life">
                                <div className="information">
                                    <p className="informationText"><span className="title">Life</span><br/><br/>I have a wife, pets, and a need to enjoy life to its fullest. Outside of work I enjoy cooking, specifically refining recipes that I learn. Playing video games, particularly ones that have a narrative and require me to cooperate with other to overcome obstacles and achieve goals. Aside from this, I love go out with my family, including the pets, to different places and spending time together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
  )
}
