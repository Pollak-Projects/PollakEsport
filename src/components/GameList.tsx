import GameCard from "./GameCard";

const GameList = () => {
  const tempData = [
    {
      title: "R6 1v1",
      description:
        "Azonnali kieséses rendszerben, 3 körig tartó meccs. A játékosok a meccs előtt egyeztetnek a mapról és a karakterekről.",
      image:
        "https://i.ytimg.com/vi/drxNwPIosUM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCZ9Bt_b9O7-PBI5yVFM3C-tfvSFQ",
    },
    {
      title: "Game 2",
      description: "This is a description of the game",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Game 3",
      description: "This is a description of the game",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Game 4",
      description: "This is a description of the game",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Game 5",
      description: "This is a description of the game",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Game 6",
      description: "This is a description of the game",
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-4">
      {tempData &&
        tempData.map((game, i) => (
          <GameCard
            key={i}
            id={i.toString()}
            header={
              <img
                src={game.image}
                alt={game.title}
                className="w-full max-h-[200px] object-cover"
              />
            }
            children={<p>{game.description}</p>}
            title={game.title}
            subTitle="Subtitle"
          />
        ))}
    </div>
  );
};

export default GameList;
