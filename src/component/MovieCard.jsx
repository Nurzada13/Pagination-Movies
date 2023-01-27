
// 1
function MovieCard({ dataProps }) {
  console.log(dataProps);
  return (
    <div>
      <img src={dataProps?.posterURL} />
      <p>{dataProps?.title}</p>
    </div>
  );
}

export default MovieCard;
