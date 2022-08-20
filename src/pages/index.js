import * as React from "react";
import { css } from "@emotion/react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from "gbimage-bridge"
import useHome from "../hooks/useHome";
import Layout from "../components/layout";
import Find from "../components/find";
import PropertiesList from "../components/propertiesList";
import Seo from "../components/seo";
import * as styles from "../css/home.module.css";

const IndexPage = () => {
  const homeData = useHome();
  const { name, content, image } = homeData[0];
  const img = getImage(image);
  const bgImage = convertToBgImage(img);

  return (
    <Layout>
      <Seo title={name} />
      <main>
        <div>
          <BackgroundImage
            Tag="section"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
          >
            <div css={css`
              height: 500px;
            `}>
              <GatsbyImage image={image} alt={"home img"} />
            </div>
            <div className={styles.imageBg}>
              <h1>Venta de Casas y Departamentos exclusivos</h1>
            </div>

          </BackgroundImage>
        </div>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1>{name}</h1>
          <p
            css={css`
              text-align: center;
            `}
          >{content}</p>
        </div>
      </main>
      <Find />
      <PropertiesList/>
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default IndexPage;
