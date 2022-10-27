function Card({
  image = "https://unsplash.it/150/200",
  id = "01",
  title = "Computer",
  description = "loading..",
}) {
  return (
    <div className="mt-4 flex w-96 items-center gap-4">
      <img src={image} className="h-40" alt="" />
      <div className="flex flex-col">
        <span className="text-4xl font-bold text-slate-400">{id}</span>
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p className="mt-2 opacity-80">{description}</p>
      </div>
    </div>
  );
}

export default Card;
