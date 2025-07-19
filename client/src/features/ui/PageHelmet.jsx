import { Helmet } from "react-helmet-async";

function PageHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default PageHelmet;
