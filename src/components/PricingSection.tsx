import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "Teste Único",
      price: "R$ 2,99",
      description: "Perfeito para experimentar",
      features: [
        "1 teste de roupa",
        "Resultado em alta qualidade",
        "Download da imagem",
        "Suporte básico"
      ],
      popular: false
    },
    {
      title: "Pacote Premium",
      price: "R$ 9,99", 
      description: "O mais escolhido pelas usuárias",
      features: [
        "5 testes de roupas",
        "Resultado em ultra qualidade",
        "Download ilimitado",
        "Histórico de testes",
        "Suporte prioritário",
        "Filtros exclusivos"
      ],
      popular: true
    }
  ];

  return (
    <section id="precos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Escolha Seu Plano
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Preços acessíveis para você experimentar o futuro da moda virtual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-elegant animate-scale-in ${
                plan.popular
                  ? 'bg-gradient-card border-2 border-primary shadow-soft'
                  : 'bg-background border border-border shadow-soft'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "default"}
                className="w-full"
                size="lg"
              >
                Escolher Plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;