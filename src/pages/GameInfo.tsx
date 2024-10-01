import { Bracket, IRoundProps } from "react-brackets";

const GameInfo = () => {
  const rounds: IRoundProps[] = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round one",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Game Info</h1>

      <p>Game info page content</p>
      <div className="flex w-full justify-center">
        <Bracket
          rounds={rounds}
          roundTitleComponent={(title: React.ReactNode, roundIndex: number) => {
            return (
              <div key={roundIndex} className="text-center">
                <h2>{title}</h2>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default GameInfo;
