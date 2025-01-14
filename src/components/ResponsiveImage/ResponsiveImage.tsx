interface ResponsiveImageProps {
  image1x: string;
  image2x: string;
  size: number;
}

export default function ResponsiveImage({
  image1x,
  image2x,
  size,
}: ResponsiveImageProps) {
  return (
    <img
      src={image1x}
      srcSet={image2x}
      alt="hero image"
      style={{ width: size }}
    />
  );
}
