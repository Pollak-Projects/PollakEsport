import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Játékok",
      icon: "pi pi-list",
      command: () => navigate("/games"),
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      disabled: true,
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
      ],
    },
  ];

  return (
    <Menubar
      model={items}
      end={
        <div className="flex items-center  gap-2">
          <div className="bg-gray-800 flex justify-center items-center">
            <i className="pi pi-search px-2"></i>
            <InputText
              placeholder="Keresés"
              type="text"
              className="bg-gray-800 p-2 focus:border-none"
            />
          </div>
          <Avatar icon="pi pi-user" shape="circle" />
        </div>
      }
    />
  );
};

export default Nav;
