import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Compromiso con la excelencia en cada proyecto que realizamos."
    },
    {
      icon: Users,
      title: "Enfoque al Cliente",
      description: "Sus necesidades son nuestra prioridad. Trabajamos para superar sus expectativas."
    },
    {
      icon: TrendingUp,
      title: "Innovación",
      description: "Implementamos las últimas tecnologías y mejores prácticas del sector."
    },
    {
      icon: Target,
      title: "Confiabilidad",
      description: "Cumplimiento de plazos y soluciones que funcionan correctamente desde el primer día."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Alvatek Solutions</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Expertos en automatización industrial y control de procesos en Colombia
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Quiénes Somos?</h2>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Alvatek Solutions S.A.S.</strong> es una empresa colombiana especializada en 
                automatización industrial, control de procesos y soluciones eléctricas para el sector industrial. 
                Contamos con un equipo de ingenieros y técnicos especializados en las principales plataformas 
                de automatización del mercado.
              </p>
              <p className="text-muted-foreground mb-6">
                Trabajamos con empresas de diversos sectores industriales, desde manufactura y alimentos hasta 
                petroquímica y minería, proporcionando soluciones personalizadas que optimizan procesos, 
                reducen costos operativos y mejoran la productividad.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">Nuestra Misión</h2>
              <p className="text-muted-foreground mb-6">
                Proporcionar soluciones integrales de automatización y control industrial de alta calidad, 
                utilizando tecnología de punta y las mejores prácticas del sector, para ayudar a nuestros 
                clientes a alcanzar sus objetivos de producción y eficiencia operativa.
              </p>

              <h2 className="text-3xl font-bold mb-6 mt-12 text-foreground">Nuestra Visión</h2>
              <p className="text-muted-foreground mb-6">
                Ser reconocidos como líderes en soluciones de automatización industrial en Colombia, 
                destacándonos por nuestra capacidad técnica, innovación y compromiso con la satisfacción 
                de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiere Trabajar con Nosotros?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estamos listos para ayudarle con su próximo proyecto de automatización.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
