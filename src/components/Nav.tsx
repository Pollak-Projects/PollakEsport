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
    <Menubar model={items}>
      <Avatar icon="pi pi-user" className="mr-2" />
      <InputText placeholder="Search" type="text" />
    </Menubar>
  );
};

export default Nav;