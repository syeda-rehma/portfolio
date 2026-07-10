import { useState, useRef, useEffect } from "react";
import images from "@/data/images";

type ImageLoaderProps = {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallback: React.ReactNode;
};

function ImageLoader({ src, alt, className = "", wrapperClassName = "", fallback }: ImageLoaderProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const triedFallback = useRef(false);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
    setErrored(false);
    triedFallback.current = false;
  }, [src]);

  const showPlaceholder = !loaded || errored;

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {showPlaceholder && (
        <div className={`absolute inset-0 flex items-center justify-center ${className} bg-card`}>
          {fallback}
        </div>
      )}
      {!errored && (
        <img
          src={imgSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (!triedFallback.current) {
              triedFallback.current = true;
              setImgSrc(images.profile);
            } else {
              setErrored(true);
            }
          }}
          className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        />
      )}
    </div>
  );
}

export default ImageLoader;