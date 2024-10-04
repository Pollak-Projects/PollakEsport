import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
const Nav = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Játékok",
      icon: "pi pi-list",
      url: "/games",
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
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      disabled: true,
      icon: "pi pi-envelope",
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
