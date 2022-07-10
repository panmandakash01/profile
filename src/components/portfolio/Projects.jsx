import React from 'react'
import './portfolio.css'
import img1 from '../../assets/food-order.jpg'
import img2 from '../../assets/tictactoe.jpg'
import img3 from '../../assets/gussingnumber.jpg'


const data = [
  {
    id:1,
    image:img1,
    title:'Food Order Webpage',
    github: 'https://github.com/panmandakash01/foodorder.github.io',
    ViewProject :'https://panmandakash01.github.io/foodorder.github.io/index.html'
    
  },

  {
    id:2,
    image:img2,
    title:'TIC TAC TOE Game',
    github: 'https://github.com/panmandakash01/TIC-TAC-TOE',
    ViewProject :'https://panmandakash01.github.io/TIC-TAC-TOE/'
    
  },

  {
    id:3,
    image: img3,
    title:'Gussing Number Game',
    github: 'https://github.com/panmandakash01/Guessing-game',
    ViewProject :'https://github.com/panmandakash01/Guessing-game'
    
  },



]


const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio_container">
       {
        data.map(({id,image,title,github,ViewProject})=>{
          return(
            <article key={id} className='portfolio_item' >
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />

              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='blank'>Github</a>
                <a href={ViewProject} className='btn btb-primary' target='blank'>View Project</a>
              </div>

            </article>
          )
        })
       }


      </div>
    </section>
    
  )
}

export default Projects
