import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error__page">
      <h1 className="error__page--h1">404</h1>
      <h3 className="error__page--h3">
        Oups! La page que vous demandez n'existe pas.
      </h3>
      <Link className="error__page--link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
