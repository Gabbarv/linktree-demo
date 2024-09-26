import { NavLink } from "react-router-dom";
import { IoLinkOutline } from "react-icons/io5";
import { CiShop, CiSettings } from "react-icons/ci";
import { TbBrandCitymapper, TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import InfoCard from "../infocard/InfoCard";
import { IoClose } from "react-icons/io5";
import InfoCardMobile from "../infocard/InfoCardMobile";
const routes = [
  {
    path: "/",
    name: "Links",
    icon: <IoLinkOutline />,
  },
  {
    path: "/shop",
    name: "Shop",
    icon: <CiShop />,
  },
  {
    path: "/appearance",
    name: "Appearance",
    icon: <TbBrandCitymapper />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/setting",
    name: "Setting",
    icon: <CiSettings />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [preview, setPreview] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar ${isOpen && "sidebar-w"}`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Linktr
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        {/* mobile menu */}
        <motion.div
          animate={{
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar-m`}
        >
          {/* <div className="top_section">

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  {/* <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        {!preview && (
          <main className={`${isOpen ? "dashboard" : "dashboard-b"}`}>
            {children}
          </main>
        )}
        <div className="info-card-details">
          <InfoCard />
        </div>
        {preview && (
          <div className="info-card-details-m">
            <InfoCardMobile />
          </div>
        )}

        {preview ? (
          <div className="preview">
            <div className="notification-btn" onClick={() => setPreview(false)}>
              <IoClose size={24} />
            </div>
          </div>
        ) : (
          <div className="preview">
            <div className="share-btn" onClick={() => setPreview(true)}>
              <FaRegEye size={24} />
              <p>Preview</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
