
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Tag {
  id: string;
  text: string;
  category?: string;
  color?: string;
}

interface TagInputProps {
  tags: Tag[];
  onTagsChange: (tags: Tag[]) => void;
  placeholder?: string;
  disabled?: boolean;
  allowDuplicates?: boolean;
  maxTags?: number;
  className?: string;
  categorized?: boolean;
}

export function TagInput({
  tags,
  onTagsChange,
  placeholder = "Add tags...",
  disabled = false,
  allowDuplicates = false,
  maxTags,
  className,
  categorized = false,
}: TagInputProps) {
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const addTag = (text: string) => {
    if (!text.trim()) return;
    
    if (!allowDuplicates && tags.some(tag => tag.text.toLowerCase() === text.toLowerCase())) {
      return;
    }
    
    if (maxTags !== undefined && tags.length >= maxTags) {
      return;
    }
    
    const newTag: Tag = {
      id: crypto.randomUUID(),
      text: text.trim(),
    };
    
    onTagsChange([...tags, newTag]);
    setInputValue("");
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    onTagsChange(newTags);
  };

  const tagsByCategory = React.useMemo(() => {
    if (!categorized) return { uncategorized: tags };
    
    return tags.reduce<Record<string, Tag[]>>((acc, tag) => {
      const category = tag.category || "uncategorized";
      if (!acc[category]) acc[category] = [];
      acc[category].push(tag);
      return acc;
    }, {});
  }, [tags, categorized]);

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const getBadgeVariant = (tag: Tag) => {
    if (tag.color) return undefined; // Use custom color
    
    const variants: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
      technical: "default",
      soft: "secondary",
      language: "outline",
      industry: "destructive",
    };
    
    return variants[tag.category || ""] || "default";
  };

  return (
    <div
      className={cn(
        "flex flex-wrap gap-2 p-2 border rounded-md bg-background focus-within:ring-1 focus-within:ring-ring focus-within:border-input",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={handleWrapperClick}
    >
      {categorized ? (
        Object.entries(tagsByCategory).map(([category, categoryTags]) => (
          <div key={category} className="flex flex-wrap gap-2">
            {category !== "uncategorized" && (
              <span className="text-sm font-medium text-muted-foreground">
                {category}:
              </span>
            )}
            {categoryTags.map((tag, index) => (
              <Badge
                key={tag.id}
                variant={getBadgeVariant(tag)}
                style={tag.color ? { backgroundColor: tag.color } : undefined}
              >
                {tag.text}
                {!disabled && (
                  <button
                    type="button"
                    className="ml-1 focus:outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      const tagIndex = tags.findIndex(t => t.id === tag.id);
                      if (tagIndex !== -1) removeTag(tagIndex);
                    }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </Badge>
            ))}
          </div>
        ))
      ) : (
        tags.map((tag, index) => (
          <Badge
            key={tag.id}
            variant={getBadgeVariant(tag)}
            style={tag.color ? { backgroundColor: tag.color } : undefined}
          >
            {tag.text}
            {!disabled && (
              <button
                type="button"
                className="ml-1 focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(index);
                }}
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </Badge>
        ))
      )}
      
      {(!maxTags || tags.length < maxTags) && !disabled && (
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 border-none shadow-none focus-visible:ring-0 h-6 p-0 min-w-[120px]"
          disabled={disabled}
        />
      )}
    </div>
  );
}
