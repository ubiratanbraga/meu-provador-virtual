
import { Sparkles } from "lucide-react";

const ResultCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative border-2 border-solid rounded-xl p-8 text-center bg-gradient-to-br from-primary/5 via-accent/20 to-primary/10 border-primary/50 shadow-elegant">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">Resultado</h3>
            <p className="text-muted-foreground text-sm mb-4">Aqui aparecerá como a roupa fica em você</p>
          </div>
          <div className="w-full h-48 rounded-lg bg-gradient-to-br from-muted/50 to-primary/5 border-2 border-dashed border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="h-12 w-12 text-primary/50 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Resultado aparecerá aqui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
