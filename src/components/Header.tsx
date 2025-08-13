import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Meu Provador
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors duration-300">
              Início
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary transition-colors duration-300">
              Como Funciona
            </a>
            <a href="#precos" className="text-foreground hover:text-primary transition-colors duration-300">
              Preços
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors duration-300">
              Contato
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button variant="default" size="sm">
            Cadastrar
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;