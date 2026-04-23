import "./Contact.css";

const contactItems = [
  { label: "Phone", value: "0163-44 39 442", href: "tel:01634439442" },
  { label: "Email", value: "malbeek92@gmail.com", href: "mailto:malbeek92@gmail.com" },
  { label: "Location", value: "Gelsenkirchen, Deutschland" },
  { label: "GitHub", value: "Maher-Albeek", href: "https://github.com/Maher-Albeek" },
  {
    label: "LinkedIn",
    value: "maher-albeek",
    href: "https://www.linkedin.com/in/maher-albeek",
  },
];

const Contact = () => {
  return (
    <div className="w-full max-w-5xl">
     
      <p className="mt-2 text-gray-400 text-base md:text-lg leading-relaxed">
        Get in touch with me:
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {contactItems.map((item) => (
          <article key={item.label} className="info-card text-left">
            <span className="info-card__eyebrow">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-4 inline-flex text-lg text-white transition-opacity duration-300 hover:opacity-75"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-4 text-lg text-white">{item.value}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default Contact;
