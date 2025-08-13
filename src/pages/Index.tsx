import { useState } from "react";
import Header from "@/components/Header";
import UploadCard from "@/components/UploadCard";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [userPhoto, setUserPhoto] = useState<File | null>(null);
  const [clothingPhoto, setClothingPhoto] = useState<File | null>(null);

  const handleTest = () => {
    if (!userPhoto || !clothingPhoto) {
      alert("Por favor, selecione ambas as imagens antes de testar!");
      return;
    }
    // Aqui seria implementada a lógica de teste virtual
    alert("Função de teste será implementada em breve!");
  };

  const features = [
    {
      icon: Sparkles,
      title: "IA Avançada",
      description: "Tecnologia de última geração para resultados realistas"
    },
    {
      icon: Zap,
      title: "Resultado Instantâneo",
      description: "Veja como a roupa fica em você em segundos"
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Suas fotos são processadas com total privacidade"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-background via-accent/20 to-primary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Experimente roupas{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    virtualmente
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Descubra como suas roupas ficam em você antes mesmo de vestir. 
                  Tecnologia de IA para o futuro da moda.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="animate-scale-in">
                  Começar Agora
                </Button>
                <Button variant="outline" size="lg" className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  Saiba Mais
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={heroImage}
                  alt="Mulher experimentando roupas virtualmente"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Como Funciona?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Em apenas 3 passos simples, você pode ver como qualquer roupa fica em você
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div className="animate-scale-in">
              <UploadCard
                title="Sua Foto"
                description="Faça upload de uma foto sua de corpo inteiro"
                icon="user"
                onImageSelect={setUserPhoto}
              />
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <UploadCard
                title="Peça de Roupa"
                description="Selecione a roupa que deseja experimentar"
                icon="shirt"
                onImageSelect={setClothingPhoto}
              />
            </div>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              variant="hero"
              size="lg"
              onClick={handleTest}
              className="text-lg px-12 py-6"
              disabled={!userPhoto || !clothingPhoto}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Testar Agora
            </Button>
            {(!userPhoto || !clothingPhoto) && (
              <p className="text-muted-foreground mt-4 text-sm">
                Selecione ambas as imagens para começar o teste
              </p>
            )}
          </div>
        </div>
      </section>

      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;