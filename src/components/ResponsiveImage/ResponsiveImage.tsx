import image1x from '../../img/home.png';
import image2x from '../../img/home@2x.png';

export default function ResponsiveImage() {
  return (
    <img
      src={image1x}
      srcSet={image2x}
      alt="hero image"
      style={{ width: '568px' }}
    />
  );
}
