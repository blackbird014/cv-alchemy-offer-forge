
import * as React from "react";
import { cn } from "@/lib/utils";
import { UploadCloud } from "lucide-react";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileSelected?: (file: File) => void;
  acceptedFileTypes?: string[];
  maxSizeMB?: number;
  label?: string;
  dropzoneText?: string;
  showPreview?: boolean;
}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      type,
      onFileSelected,
      acceptedFileTypes = [".pdf", ".docx", ".doc"],
      maxSizeMB = 5,
      label = "Upload CV",
      dropzoneText = "Drag & drop your CV here or click to browse",
      showPreview = false,
      ...props
    },
    ref
  ) => {
    const [dragActive, setDragActive] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    
    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const validateFile = (file: File): boolean => {
      // Check file type
      const fileType = file.name.split(".").pop()?.toLowerCase();
      const acceptedTypes = acceptedFileTypes.map(type => 
        type.startsWith(".") ? type.substring(1) : type
      );
      
      if (!acceptedTypes.includes(fileType as string)) {
        setError(`Invalid file type. Accepted types: ${acceptedFileTypes.join(", ")}`);
        return false;
      }

      // Check file size
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        setError(`File size exceeds the maximum limit of ${maxSizeMB}MB`);
        return false;
      }

      setError(null);
      return true;
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (validateFile(file)) {
          setSelectedFile(file);
          onFileSelected && onFileSelected(file);
        }
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (validateFile(file)) {
          setSelectedFile(file);
          onFileSelected && onFileSelected(file);
        }
      }
    };

    const handleClick = () => {
      inputRef.current?.click();
    };

    return (
      <div className="w-full">
        {label && <label className="block text-sm font-medium mb-2">{label}</label>}
        
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-64 p-6 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
            error ? "border-destructive bg-destructive/5" : "",
            className
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            ref={(input) => {
              inputRef.current = input;
              if (typeof ref === "function") {
                ref(input);
              } else if (ref) {
                ref.current = input;
              }
            }}
            type="file"
            className="hidden"
            accept={acceptedFileTypes.join(",")}
            onChange={handleChange}
            {...props}
          />
          
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <UploadCloud className={cn("w-10 h-10", dragActive ? "text-primary" : "text-muted-foreground")} />
            
            {selectedFile ? (
              <>
                <p className="text-sm font-medium">Selected file: {selectedFile.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium">{dropzoneText}</p>
                <p className="text-xs text-muted-foreground">
                  Accepted file types: {acceptedFileTypes.join(", ")}
                </p>
                <p className="text-xs text-muted-foreground">
                  Maximum file size: {maxSizeMB}MB
                </p>
              </>
            )}
          </div>
        </div>
        
        {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";
