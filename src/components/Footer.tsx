import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/Logo4.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-40 h-40 rounded-lg flex items-center justify-center overflow-hidden" >
                <img src={logo} alt="Alvatek Solutions" classnName="w-full h-full object-contain" />
              </div>
              {/*<div className="flex flex-col">
                <span className="font-bold text-secondary-foreground text-lg leading-tight">Alvatek</span>
                <span className="text-xs text-secondary-foreground/70 leading-tight">Solutions S.A.S.</span>
              </div>*/}
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Soluciones profesionales en automatización industrial y control eléctrico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Programación PLC y HMI</li>
              <li>Diseño de Tableros</li>
              <li>Automatización Industrial</li>
              <li>Mantenimiento</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">Colombia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:info@alvatek.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  info@alvatek.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+57" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  +57 313 422 9134
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Alvatek Solutions S.A.S. Todos los derechos reservados.</p>
          <p className="mt-2">NIT: 901.998.538-1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
