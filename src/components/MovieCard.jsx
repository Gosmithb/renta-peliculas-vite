import './MovieCard.css';

export const MovieCard = (key, { titulo, popularidad, lenguajeOriginal }) => {
  return (
    <ol key={key} className="cards">
      <div className="movieCard">
        <img className="image" src="..." alt="Card image cap" />
        <div className="body">
          <h5 className="title">Titulo</h5>
          <p className="text">Informacion Lorem ipsum dolor sit </p>
        </div>
      </div>
    </ol>
  )
}
