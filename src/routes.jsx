import { Home, About, Event, Service, Profile, Contact } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Dashboard from "./pages/Dashboard";


export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: CalendarDaysIcon,
    name: "events",
    path: "/event",
    element: <Event />,
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "services",
    path: "/service",
    element: <Service />,
  },
  
  {
    icon: UserCircleIcon,
    name: "about",
    path: "/about",
    element: <About />,
  },

  {
    icon: PhoneIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },

  {
    icon: AcademicCapIcon,
    name: "admin",
    path: "/admin",
    element: <Dashboard />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Admin",
  //   path: "/admin",
  //   element: <Dashboard />,
  // },
];

export default routes;
