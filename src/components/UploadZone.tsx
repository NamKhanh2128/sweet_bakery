import { Plus } from "lucide-react";
import { useState, useRef, DragEvent, ChangeEvent } from "react";

interface UploadZoneProps {
  image?: string;
  className?: string;
  onImageChange?: (imageUrl: string | null) => void;
}

export function UploadZone({ image: initialImage, className = "", onImageChange }: UploadZoneProps) {
  const [image, setImage] = useState<string | null>(initialImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImage(result);
        onImageChange?.(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div 
      className={`upload-zone aspect-[4/3] cursor-pointer transition-all ${isDragging ? "border-primary border-solid bg-primary/5" : ""} ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-xl" />
      ) : (
        <>
          <Plus className="w-16 h-16 text-muted-foreground/50" strokeWidth={1} />
          <p className="text-muted-foreground mt-2 text-center px-4">
            {isDragging ? "Drop your image here!" : "Insert/Drag/Drop your file here!"}
          </p>
        </>
      )}
    </div>
  );
}
