import type { IconType } from "react-icons";
import { FaLinkedinIn, FaXing } from "react-icons/fa6";
import { FiGithub, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import profileImage from "../assets/conact.png";
import "./Contact.css";

type ContactItem = {
  label: string;
  value: string;
  href?: string;
  icon?: IconType;
};

type SocialItem = {
  label: string;
  href: string;
  icon: IconType;
};

const contactItems: ContactItem[] = [
  { label: "Phone", value: "0163-44 39 442", href: "tel:01634439442", icon: FiPhoneCall },
  { label: "Email", value: "malbeek92@gmail.com", href: "mailto:malbeek92@gmail.com", icon: FiMail },
  { label: "Location", value: "Gelsenkirchen, Deutschland", icon: FiMapPin },
  { label: "Availability", value: "Open to full-time roles" },
];

const socialItems: SocialItem[] = [
  { label: "GitHub", href: "https://github.com/Maher-Albeek", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maher-albeek", icon: FaLinkedinIn },
  { label: "Xing", href: "https://www.xing.com/profile/Maher_Albeek037032/web_profiles?nwt_nav=profile", icon: FaXing },
];
const Contact = () => {
  return (
    <div className="contact-layout">
      <div className="contact-layout__left" aria-label="Profile and social media links">
        <figure className="contact-photo-wrap">
          <img src={profileImage} alt="Portrait of Maher Albeek" className="contact-photo" />
        </figure>

        <div className="contact-social" aria-label="Social media links">
          {socialItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="contact-social__link"
                aria-label={item.label}
                title={item.label}
              >
                <Icon />
                
              </a>
            );
          })}
        </div>
      </div>

      <div className="contact-layout__right">
        <div className="contact-layout__intro">
          <p className="contact-kicker">Let's build something useful</p>
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-subtitle">
            If you have an idea, project, or role in mind, reach out through the details below.
          </p>
        </div>

        <div className="contact-info-grid">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className="contact-info-card">
                <div className="contact-info-card__header">
                  {Icon ? (
                    <span className="contact-info-card__icon" aria-hidden="true">
                      <Icon />
                    </span>
                  ) : null}
                  <span className="info-card__eyebrow">{item.label}</span>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact-info-card__value"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="contact-info-card__value">{item.value}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
