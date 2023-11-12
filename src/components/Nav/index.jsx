import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";

export function Nav() {
  const location = useLocation();

  useEffect(() => {
  }, []);

  const heading =
    menuData.admin &&
    menuData.admin
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Categories</a>
                <a class="nav-item nav-link" href="#">Make Contribution</a>
                <a class="nav-item nav-link disabled" href="#">Disabled</a>
            </div>
        </div>
    </nav>

  );
}