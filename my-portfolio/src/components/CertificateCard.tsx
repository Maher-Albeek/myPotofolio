import "./CertificateCard.css";
import { FiEye } from "react-icons/fi";
import { SVG3D } from "3dsvg";

type CertificateCardProps = {
  title: string;
  date: string;
  image: string;
  type: "svg" | "text";
    color?: string;
  onOpen: () => void;
};

const CertificateCard = ({ title, date, image, type, color, onOpen }: CertificateCardProps) => {
  const contentProps = type === "svg" ? { svg: image } : { text: image };

  return (
    <article className="certificate-card">
      <div className="certificate-card__image-wrap">
        <SVG3D
          {...contentProps}
          depth={1.3}
          smoothness={0.5}
          color={color || "#3b82f6"}
          material="metal"
          metalness={0.69}
          roughness={0}
          animate="spin"
          zoom={4}
        />
      </div>

      <div className="certificate-card__content">
        <p className="certificate-card__date">{date}</p>
        <h3 className="certificate-card__title">{title}</h3>
        <button
          type="button"
          className="certificate-card__link"
          onClick={onOpen}
          aria-label={`Open ${title} certificate`}
        >
          View Certificate
          <FiEye aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default CertificateCard;
