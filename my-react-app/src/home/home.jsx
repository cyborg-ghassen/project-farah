import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUsers,
  FaTools,
  FaPuzzlePiece,
  FaCogs,
  FaHistory,
  FaPlus,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md"; // ✅ new icon
import { AiOutlineFileText } from "react-icons/ai";
import Navbar from "../components/Navbar";

const sidebarLinks = [
  { icon: MdDashboard, label: "Tableau de bord", path: "/" },
  { icon: FaUsers, label: "Utilisateurs", path: "/utilisateurs" },
  { icon: FaTools, label: "Outils", path: "/outils" },
  { icon: FaPuzzlePiece, label: "Intégrations", path: "/integrations" },
  { icon: FaCogs, label: "Personnalisations", path: "/personnalisations" },
];

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <li
    className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition ${
      active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
    }`}
    onClick={onClick}
  >
    <Icon className="text-lg" />
    {label}
  </li>
);

const Card = ({ icon: Icon, title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white border-2 border-blue-500 rounded-xl p-6 text-center hover:bg-blue-50 cursor-pointer mb-6 transition"
  >
    <div className="flex justify-center mb-2">
      <Icon className="text-blue-600 text-3xl" />
    </div>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

const StatusCard = ({ title, count, bgColor, hoverColor, onClick }) => (
  <div
    onClick={onClick}
    className={`${bgColor} text-white rounded-xl p-6 text-center shadow-md cursor-pointer ${hoverColor} transition`}
  >
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{count}</p>
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Tableau de bord");
  const navigate = useNavigate();

  const handleMenuClick = (label, path) => {
    setActiveItem(label);
    navigate(path);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md p-4 space-y-6 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex justify-between items-center">
          {sidebarOpen && (
            <h2 className="text-xl font-bold text-blue-600">MedicalApp</h2>
          )}
          <button
            className="bg-white p-2 rounded-full shadow text-gray-700 ml-auto"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {sidebarOpen && (
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">PUBLIC</p>
            <ul className="space-y-2">
              {sidebarLinks.map(({ icon, label, path }) => (
                <SidebarItem
                  key={label}
                  icon={icon}
                  label={label}
                  active={activeItem === label}
                  onClick={() => handleMenuClick(label, path)}
                />
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto relative">
      <Navbar/>
        <main className="p-6 pt-8 sm:pt-5">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Tableau de bord
          </h1>

          {/* New Patient */}
          <Card
            icon={FaPlus}
            title="Nouveau patient, nouvelle demande"
            description="Nous ne connaissons pas le patient. Aucune demande n’a été remplie."
            onClick={() => navigate("/patient")}
          />

          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <StatusCard
              title="Avis Prêts"
              count={27}
              bgColor="bg-green-500"
              hoverColor="hover:bg-green-600"
              onClick={() => navigate("/pret")}
            />
            <StatusCard
              title="Complément d'information"
              count={4}
              bgColor="bg-orange-400"
              hoverColor="hover:bg-orange-500"
              onClick={() => navigate("/complement")}
            />
            <StatusCard
              title="Avis En Cours"
              count={2}
              bgColor="bg-yellow-400"
              hoverColor="hover:bg-yellow-500"
              onClick={() => navigate("/cours")}
            />
          </div>

          {/* Bottom Cards */}
          <Card
            icon={AiOutlineFileText}
            title="Ancien patient, mise à jour d'une demande"
            description="Nous connaissons le patient. Une demande a déjà été remplie."
            onClick={() => navigate("/historique")}
          />
          <Card
            icon={FaHistory}
            title="Historique des demandes d'avis"
            description="Consulter, mettre à jour et imprimer en PDF toutes les demandes émises par ce compte."
            onClick={() => navigate("/update")}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
