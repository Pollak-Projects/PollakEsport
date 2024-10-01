import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

const GameCard = ({
  title,
  subTitle,
  header,
  children,
  id,
}: {
  title: string;
  subTitle: string;
  header: React.ReactNode;
  children: React.ReactNode;
  id: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card
      title={title}
      subTitle={subTitle}
      header={header}
      className="max-w-[500px] m-4 cursor-pointer shadow-xl hover:drop-shadow-lg "
      onClick={() => navigate(`/games/${id}`)}
    >
      {children}
    </Card>
  );
};

export default GameCard;
