import React from "react";

const MenuCard = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 w-full h-full"
    >
      <div className="text-gray-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-gray-600 font-semibold text-base">{label}</h3>
    </button>
  );
};

const MenuGrid = () => {
  const menuItems = [
    { icon: "🐾", label: "Menu 1", onClick: () => alert("Menu 1 clicked!") },
    { icon: "🍎", label: "Menu 2", onClick: () => alert("Menu 2 clicked!") },
    { icon: "🔥", label: "Menu 3", onClick: () => alert("Menu 3 clicked!") },
    { icon: "⚓", label: "Menu 4", onClick: () => alert("Menu 4 clicked!") },
    { icon: "🔗", label: "Menu 5", onClick: () => alert("Menu 5 clicked!") },
    { icon: "✈️", label: "Menu 6", onClick: () => alert("Menu 6 clicked!") },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="aspect-[4/3] max-w-[250px] mx-auto w-full"
          >
            <MenuCard icon={item.icon} label={item.label} onClick={item.onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
