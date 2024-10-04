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
      className="max-w-[450px] m-4 cursor-pointer shadow-black shadow-md hover:shadow-2xl hover:shadow-black hover:scale-105 transition-all bg-black ease-linear duration-100 border-b-8 border-blue-50"
      onClick={() => navigate(`/games/${id}`)}
      tabIndex={1}
    >
      {children}
    </Card>
  );
};

export default GameCard;
