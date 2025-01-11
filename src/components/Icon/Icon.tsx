import { FC } from 'react';
import sprite from '../../img/sprite.svg';

interface IconProps {
  id: string;
  size?: number;
}

const Icon: FC<IconProps> = ({ id, size = 20 }) => (
  <svg width={size} height={size}>
    <use xlinkHref={`${sprite}#${id}`} />
  </svg>
);

export default Icon;
