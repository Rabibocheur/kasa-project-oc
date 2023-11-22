import PropTypes from "prop-types";
import { useState } from "react";

import arrowCollapse from "../assets/arrow_collapse.png";

function Collapse({ title, content, type }) {
  const [collapse, setCollapse] = useState(false);

  const collapseToogle = () => {
    setCollapse(!collapse);
  };

  const collapseVisibility = collapse ? "collapse__content--visible" : "";
  const arrowToogle = collapse
    ? "collapse__header__arrow--open"
    : "collapse__header__arrow--close";

  return (
    <div>
      <section className="collapse">
        <header className="collapse__header" onClick={collapseToogle}>
          {title}
          <img
            className={`collapse__header__arrow ${arrowToogle}`}
            src={arrowCollapse}
            alt="arrow collapse"
          />
        </header>
        <article className={`collapse__content ${collapseVisibility}`}>
          {type === "text" ? (
            content
          ) : (
            <ul>
              {content.map((element, index) => (
                <li key={`${element}-${index}`}>{element}</li>
              ))}
            </ul>
          )}
        </article>
      </section>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Collapse.defaultProps = {
  type: "text",
};

export default Collapse;
