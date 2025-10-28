import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Cpu, Zap, Settings, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const Home = () => {
  const services = [
    {
      icon: Cpu,
      title: "Programación PLC y HMI",
      description: "Desarrollo, integración y optimización de sistemas de control industrial con PLC y pantallas HMI.",
    },
    {
      icon: Zap,
      title: "Diseño de Tableros Eléctricos",
      description: "Diseño y montaje de tableros de control seguros y eficientes para sus procesos industriales.",
    },
    {
      icon: Settings,
      title: "Automatización Industrial",
      description: "Proyectos completos de automatización: desde el diseño hasta la implementación y puesta en marcha.",
    },
    {
      icon: Wrench,
      title: "Mantenimiento y Soporte",
      description: "Mantenimiento preventivo y correctivo de sistemas de automatización y control industrial.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-secondary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Automatizando su Industria con<br />
            <span className="text-primary">Precisión e Innovación</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 max-w-3xl mx-auto">
            Soluciones profesionales en automatización industrial, diseño eléctrico y control de procesos en Colombia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="hero">
              <Link to="/contacto">Solicitar Cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en automatización y control industrial para optimizar sus procesos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Automatizar su Proceso?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctenos hoy y descubra cómo podemos ayudarle a optimizar su producción con nuestras soluciones de automatización.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
