import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NewImage from "../assets/NewImage.jpg";

function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.transform = "translateX(0)";
  }, []);

  const buttonClass =
    "w-full bg-purple-500 text-white text-xs py-2 rounded-full hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
      <div className="w-full max-w-5xl h-[90vh] flex bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10">
          <h1 className="text-2xl text-gray-700 mb-4">Inscription</h1>
          <p className="text-xs text-gray-600 mb-6">Créez un nouveau compte</p>

          <div className="w-full max-w-xs">
            <div className="mb-4">
              <label className="text-gray-600 text-xs">Nom complet</label>
              <input
                type="text"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Entrez votre nom complet"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-600 text-xs">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Entrez votre email"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-600 text-xs">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Créez un mot de passe"
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-600 text-xs">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Confirmez votre mot de passe"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-600 text-xs">Rôle</label>
              <select className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm">
                <option value="">Sélectionnez un rôle</option>
                <option value="doctor">Médecin</option>
                <option value="resident">Résident</option>
                <option value="pharmacist">Pharmacien</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input type="checkbox" id="terms" className="text-purple-500" />
              <label htmlFor="terms" className="text-xs text-gray-600">
                J'accepte les{" "}
                <a href="/terms" className="text-purple-500 hover:underline">
                  Termes et Conditions
                </a>
              </label>
            </div>

            <button
              className={buttonClass}
              onClick={() => navigate("/dashboard")}
            >
              S'inscrire
            </button>

            <div className="mt-4">
              <p className="text-center text-gray-600 text-xs">
                Vous avez déjà un compte ?{" "}
                <span
                  className="text-purple-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/login")}
                >
                  Connectez-vous
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full w-full object-cover object-center"
            src={NewImage}
            alt="Illustration principale"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
