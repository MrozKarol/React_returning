// console.log(React);
// console.log(React);

const header = <h1 className="title">Lorem ipsum dolor </h1>
const main = (
  <div>
    <h1>Pierwszy artykuł</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae consectetur sunt voluptatibus veniam fugit quo nihil, ad provident eius veritatis maxime numquam. Nesciunt, optio. Dolorum eum iure laboriosam praesentium consectetur!</p>
  </div>
)

const footer = (
  <footer>
    <p>Stipka</p>
  </footer>
)

const app = [header, main, footer]


ReactDOM.render(app, document.getElementById('root'))