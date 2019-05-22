// console.log(React);
// console.log(React);

const header = <h1 className="title">Lorem ipsum dolor </h1>

const classBig = "big"

const handleClick = () => alert("kliknął")

const main = (
  <div>
    <h1 onClick={ handleClick}  className="red" >Pierwszy artykuł</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consectetur sunt voluptatibus veniam fugit quo nihil, ad provident eius veritatis maxime numquam. Nesciunt, optio. Dolorum eum iure laboriosam praesentium consectetur!</p>
  </div>
)

const textExample ="Lorem Lorem Lorem Lorem Lorem Lorem"
const footer = (
  <footer>
    <p className={classBig} >Stipka {textExample}</p> 
  </footer>
)

const app = [header, main, footer]


ReactDOM.render(app, document.getElementById('root'))