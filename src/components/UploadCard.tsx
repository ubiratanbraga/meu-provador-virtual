import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, User, Shirt } from "lucide-react";

interface UploadCardProps {
  title: string;
  description: string;
  icon: "user" | "shirt";
  onImageSelect: (file: File) => void;
}

const UploadCard = ({ title, description, icon, onImageSelect }: UploadCardProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const IconComponent = icon === "user" ? User : Shirt;

  return (
    <div className="w-full max-w-sm mx-auto h-full">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 bg-gradient-card shadow-soft hover:shadow-elegant h-full flex flex-col ${
          isDragOver ? 'border-primary bg-primary/5' : 'border-primary/30'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {preview ? (
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{description}</p>
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted flex-1">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="upload"
              onClick={() => document.getElementById(`file-${icon}`)?.click()}
              className="w-full mt-auto"
            >
              <Upload className="mr-2 h-4 w-4" />
              Alterar Imagem
            </Button>
          </div>
        ) : (
          <div className="space-y-4 flex-1 flex flex-col">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{description}</p>
            </div>
            <div className="w-full h-48 rounded-lg bg-gradient-to-br from-muted/50 to-primary/5 border-2 border-dashed border-primary/30 flex items-center justify-center flex-1">
              <div className="text-center">
                <IconComponent className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Clique ou arraste sua imagem aqui</p>
              </div>
            </div>
            <Button
              variant="upload"
              onClick={() => document.getElementById(`file-${icon}`)?.click()}
              className="w-full mt-auto"
            >
              <Upload className="mr-2 h-4 w-4" />
              Selecionar Imagem
            </Button>
          </div>
        )}
        
        <input
          id={`file-${icon}`}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileSelect(file);
          }}
        />
      </div>
    </div>
  );
};

export default UploadCard;