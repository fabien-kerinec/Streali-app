import { Pixels } from '../../../types/types/custom';

export interface AlertImageProps {
  src: string;
  width: Pixels;
  height: Pixels;
  posX: Pixels;
  posY: Pixels;
  id: string;
}

export const AlertImage = (props: AlertImageProps) => {
  const { src, width, height, posX, posY, id } = props;

  return (
    <div
      className="draggable-alert absolute z-[9999] block transition-colors hover:outline hover:outline-1 hover:outline-white/30"
      style={{
        width: width,
        height: height,
        transform: `translate(${posX}px, ${posY}px)`,
      }}
      data-id={id}
      data-x={posX}
      data-y={posY}
    >
      <img src={src} alt="img" className="h-full w-full object-cover" />
    </div>
  );
};
export default AlertImage;
