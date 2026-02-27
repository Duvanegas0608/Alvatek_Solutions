import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Settings, Wrench, Cable, Gauge } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Programación PLC y HMI",
      description: "Desarrollamos, integramos y optimizamos sistemas de control industrial utilizando controladores lógicos programables (PLC) y pantallas de interfaz humano-máquina (HMI). Trabajamos con las principales marcas del mercado como Siemens, Allen-Bradley, Schneider Electric, y Delta.",
      features: [
        "Programación de PLC en múltiples plataformas",
        "Diseño de interfaces HMI intuitivas",
        "Integración con sistemas SCADA (AVEVA, Ignition, Factory Talk y Simatic WinCC",
        "Optimización de código existente"
      ]
    },
    {
      icon: Zap,
      title: "Diseño de Tableros Eléctricos",
      description: "Diseñamos y montamos tableros de control eléctricos seguros y eficientes, cumpliendo con las normas técnicas colombianas e internacionales. Desde tableros de distribución hasta centros de control de motores (CCM).",
      features: [
        "Diseño según normas NTC y IEC",
        "Diagramas unifilares y trifilares",
        "Selección de componentes certificados",
        "Montaje y cableado profesional"
      ]
    },
    {
      icon: Settings,
      title: "Proyectos de Automatización Industrial",
      description: "Implementamos proyectos completos de automatización industrial, desde el análisis inicial hasta la puesta en marcha. Transformamos procesos manuales en sistemas automáticos eficientes y confiables.",
      features: [
        "Análisis y diseño del sistema",
        "Selección de equipos y componentes",
        "Programación e integración",
        "Pruebas y puesta en marcha"
      ]
    },
    {
      icon: Wrench,
      title: "Mantenimiento y Soporte Técnico",
      description: "Ofrecemos servicios de mantenimiento preventivo y correctivo para sistemas de automatización y control industrial. Garantizamos la continuidad operacional de sus procesos con respuesta rápida y efectiva.",
      features: [
        "Mantenimiento preventivo programado",
        "Diagnóstico y reparación de fallas",
        "Actualización de sistemas",
        "Soporte técnico remoto y en sitio"
      ]
    },
    {
      icon: Cable,
      title: "Instalaciones Eléctricas Industriales",
      description: "Realizamos instalaciones eléctricas industriales de baja y media tensión, asegurando la calidad y seguridad en cada proyecto. Cumplimos estrictamente con el RETIE y normas técnicas aplicables.",
      features: [
        "Instalaciones de baja y media tensión",
        "Sistemas de puesta a tierra",
        "Redes eléctricas industriales"
      ]
    },
    {
      icon: Gauge,
      title: "Instrumentación y Control",
      description: "Instalación, calibración y mantenimiento de instrumentos de medición y control de procesos industriales. Trabajamos con sensores, transmisores, válvulas de control y equipos de medición.",
      features: [
        "Selección de instrumentación",
        "Instalación y calibración",
        "Integración a sistemas de control",
        "Mantenimiento y certificación"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Soluciones integrales en automatización y control industrial
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesita Alguno de Nuestros Servicios?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctenos para una consultoría gratuita y cotización sin compromiso.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
