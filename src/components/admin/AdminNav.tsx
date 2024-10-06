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
      disabled: false,
      items: [
        {
          label: "Játék lista",
          icon: "pi pi-list",
          url: "/games",
        },
        {
          label: "Új játék",
          icon: "pi pi-plus",
        },
        {
          label: "Játék szerkesztése",
          icon: "pi pi-pencil",
        },
        {
          label: "Játék törlése",
          icon: "pi pi-trash",
        },
      ],
    },
    {
      label: "Csapatok",
      icon: "pi pi-users",
      disabled: false,
      items: [
        {
          label: "Csapat lista",
          icon: "pi pi-list",
          url: "/admin/teams",
        },
        {
          label: "Új csapat",
          icon: "pi pi-plus",
          url: "/admin/newteam",
        },
        {
          label: "Csapat szerkesztése",
          icon: "pi pi-pencil",
        },
        {
          label: "Csapat törlése",
          icon: "pi pi-trash",
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
        <div className="flex items-center gap-2">
          <div className="bg-gray-800 flex justify-center items-center rounded-xl">
            <i className="pi pi-search px-3"></i>
            <InputText
              placeholder="Keresés"
              type="text"
              className="bg-gray-800 p-2 border-none"
            />
          </div>
          <Avatar icon="pi pi-user" shape="circle" />
        </div>
      }
    />
  );
};

export default Nav;
