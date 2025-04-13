import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import NewImage from "../assets/NewImage.jpg";

function Page1() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.transform = "translateX(0)";
  }, []);

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  const buttonClass =
    "w-full bg-purple-500 text-white text-xs py-2 rounded-full hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105";

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700">
      <div className="w-full max-w-5xl h-[90vh] flex bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Left Section - Image */}
        <div className="w-1/2 hidden md:flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full w-full object-cover object-center"
            src={NewImage}
            alt="Illustration principale"
          />
        </div>

        {/* Right Section - Login */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10">
          <h1 className="text-2xl text-gray-700 mb-4">Connectez-vous</h1>
          <p className="text-xs text-gray-600 mb-6">
            Veuillez vous connecter à votre compte
          </p>

          <div className="w-full max-w-xs">
            <div className="mb-4">
              <label className="text-gray-600 text-xs">Nom d'utilisateur</label>
              <input
                type="text"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Entrez votre nom d'utilisateur"
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-600 text-xs">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-300 focus:outline-none focus:border-purple-500 py-2 px-3 rounded-md shadow-sm focus:shadow-md transition duration-300 text-sm"
                placeholder="Entrez votre mot de passe"
              />
            </div>

            <div className="mb-4 text-right">
              <span
                className="text-purple-500 text-xs cursor-pointer hover:underline"
                onClick={() => navigate("/forgot-password")}
              >
                Mot de passe oublié ?
              </span>
            </div>

            <button className={buttonClass} onClick={handleSignIn}>
              Se connecter
            </button>

            <div className="mt-4">
              <button
                className={`${buttonClass} flex items-center justify-center gap-2`}
              >
                <span className="material-icons text-base">login</span>
                Se connecter avec Google
              </button>
            </div>

            <div className="w-full border-t border-gray-300 my-4"></div>

            <div className="mt-4 space-y-4">
              <div className="flex flex-col items-center">
                <button
                  className={buttonClass}
                  onClick={() => navigate("/demande-avis")}
                >
                  Demande d’avis d’infectiologie
                </button>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className={buttonClass}
                  onClick={() => navigate("/recommandations")}
                >
                  Consulter les recommandations
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-center text-gray-600 text-xs">
                Vous n'avez pas de compte ?{" "}
                <span
                  className="text-purple-500 cursor-pointer hover:underline"
                  onClick={() => navigate("/register")}
                >
                  Inscrivez-vous
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
