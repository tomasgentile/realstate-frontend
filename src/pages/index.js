import * as React from "react";
import { getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { convertToBgImage } from "gbimage-bridge";
import { css } from "@emotion/react";
import * as styles from "../css/home.module.css";
import useHome from "../hooks/useHome";
import Layout from "../components/layout";
import Find from "../components/find";
import PropertiesList from "../components/propertiesList";
import Seo from "../components/seo";

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
            </div>
            <div className={styles.imageBg}>
              <h1
                css={css`
                  margin-bottom: 4rem;
                `}
              >Venta de Casas y Departamentos exclusivos</h1>
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
      <PropertiesList />
    </Layout>
  )
}

export default IndexPage;
