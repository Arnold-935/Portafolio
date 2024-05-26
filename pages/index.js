import Layout from "../components/layout";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";
console.log(experiences)

const Index = () =>(

    <Layout>
        {/** header */}
        <header class= "row">
            <div class="cold-md-12">
                <div class=" card card-body bg-secondary text-light">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="img-fluid" src="gato-inf.webp" alt=""/>
                        </div>
                        
                        <div class="col-md-8">
                            <h1>Arnold Morales Obando</h1>
                            <h3>Web Developer</h3>
                            <p>
                            Estudiante de la UCR desde 2019, graduado del Colegio Academico de Boruca. Originario de Las Brisas de Cabagra,
                            estudio informatica empresarial como parte de un proyecto personal que tengo a futuro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/**Second Section */}

        <div class="row py-2">
            <div class="col-md-4">
                <div class="card bg-light">
                    <div class="card-body">
                        <h1>skills</h1>

                        {
                            skills.map(({skill, percentage}, i) => (
                                <div class="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div class="progress-bar"
                                        role="progressbar"
                                        style={{ width:`${percentage}%`, backgroundColor: 'Darkblue', padding: '0.5rem' }}>
                                    </div>    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div class="col-md-8">
            <div class="card bg-light">
                <div class="card-body">
                    <h1>Experience</h1>

                    <ul>
                        { 
                        experiences.map(({title, description, from, to}, index) =>(
                            <li key={index}>
                            <h3>{title}</h3>
                            <h5>{from}-{to}</h5>
                            <p>{description}</p> 
                            </li> 
                        ))
                        }    
                    </ul>

                    <Link href="https://wa.me/+50683578230" class="btn btn-light">
                            Call to action
                    </Link>
                    </div>
                </div>
            </div>
        </div>

        {/** Portfolio */}
        <div class="row">
            <div class="col-md-12">
                <div class="card card-body bg-dark">
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="text-center text-light">Fulfilled Projects</h1>
                        </div>
                            {
                                projects.map(({name, description, image, link}, i) =>(
                                    <div class="col-md-4 p-2" key={i}>
                                        <div class="card card-body bg-light h-100">
                                            <div class="overflow">
                                                 <img src={`/${image}`} alt="" class="card-img-top"/>
                                            </div>
                                           
                                            <div class="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href={link} class="btn btn-light">
                                                    Know More
                                            </Link>
                                            </div>
                                        </div>
                                    </div>  
                                ))
                            }
                        
                    </div>
                </div>
            </div>
        </div>


    </Layout>
)

export default Index;