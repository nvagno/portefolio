import {
  BriefcaseBusiness,
  Code,
  Contact,
  Facebook,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "../ui/button";
import { useIntl } from "react-intl";

export function ContactSection() {
  const intl = useIntl();

  const navItems = [
    {
      id: "home",
      label: intl.formatMessage({ id: "home" }),
      icon: <Home />,
      link: "#home",
    },
    {
      id: "works",
      label: intl.formatMessage({ id: "works" }),
      icon: <BriefcaseBusiness />,
      link: "#works",
    },
    {
      id: "portfolio",
      label: intl.formatMessage({ id: "portefolio" }),
      icon: <Code />,
      link: "#portefolio",
    },
    {
      id: "contacts",
      label: intl.formatMessage({ id: "contacts" }),
      icon: <Contact />,
      link: "#contacts",
    },
  ];

  return (
    <footer id="contacts" className="dark:bg-white bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 lg:w-20 lg:h-20"
                src="logo.png"
                alt="Logo"
              />
              <div>
                <h2 className="text-2xl dark:text-black text-white font-bold">
                  Ny Hasina M. VAGNO
                </h2>
                <p className="text-sm text-slate-400 dark:text-slate-600">
                  {intl.formatMessage({
                    id: "engineer",
                  })}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-3 dark:text-slate-600">
                {intl.formatMessage({
                  id: "follow",
                })}
              </p>
              <div className="flex space-x-4">
                <Button size="icon" className="bg-slate-700 text-white">
                  <a
                    href="https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" className="bg-slate-700 text-white">
                  <a
                    href="https://github.com/nvagno"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="icon" className="bg-slate-700 text-white ">
                  <a
                    href="https://www.facebook.com/nyhasina.vagno/"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-white dark:text-black">
              {intl.formatMessage({
                id: "links",
              })}
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, k) => [
                <li key={k}>
                  <a
                    href={item.link}
                    className="text-slate-300 dark:text-slate-600 transition-colors flex items-center group"
                  >
                    {item.label}
                  </a>
                </li>,
              ])}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 dark:text-black text-white">
              CONTACTS
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Button size="icon" className="bg-slate-600 text-white">
                  <Phone className="w-5 h-5" />
                </Button>
                <div className="text-sm">
                  <p className="text-slate-400 dark:text-slate-600 mb-1">
                    {intl.formatMessage({
                      id: "phone",
                    })}
                  </p>
                  <p className="font-medium text-white dark:text-black">
                    +262 693 42 80 16
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Button size="icon" className="bg-slate-600 text-white">
                  <Mail className="w-5 h-5" />
                </Button>
                <div className="text-sm">
                  <p className="text-slate-400 dark:text-slate-600 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:nyhasinavagno@gmail.com"
                    className="font-medium transition-colors text-white dark:text-black"
                  >
                    nyhasinavagno@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Button size="icon" className="bg-slate-600 text-white">
                  <MapPin className="w-5 h-5" />
                </Button>
                <div className="text-sm">
                  <p className="text-slate-400 mb-1 dark:text-slate-600">
                    {intl.formatMessage({
                      id: "address",
                    })}
                  </p>
                  <p className="font-medium leading-relaxed text-white dark:text-black">
                    14 Avenue Dr Jean-Marie Dambreville, 97410 Saint-Pierre, La
                    Réunion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 dark:text-slate-600 text-sm">
            ©Ny Hasina M. VAGNO.{" "}
            {intl.formatMessage({
              id: "reserved",
            })}
          </p>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-colors">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </footer>
  );
}
