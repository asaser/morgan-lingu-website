
/*eslint-disable*/ 
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinksMorganLingu from "components/Header/HeaderLinksMorganLingu.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionDescribeEnglish from "../../../views/SectionsPage/Sections/Pricing/EnglishLanguage/SectionDescribeEnglish";
import SectionWordEnglish from "../../../views/SectionsPage/Sections/Pricing/EnglishLanguage/SectionWordEnglish";
import SectionPricesLanguageEnglish from "../../../views/SectionsPage/Sections/PricesLanguage/SectionPricesLanguageEnglish";
import SectionFooter from "views/SectionsPage/Sections/Footer/SectionFooter.js";


const useStyles = makeStyles(landingPageStyle);

function HowLearnPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="MorganLingu"
        links={<HeaderLinksMorganLingu dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <Parallax
        image={require("assets/img/bgLanguageEngland.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Język Angielski</h1>
              <h4>
                <i>„An investment in education pays the best interest”</i>
                <p><i>„Inwestycja w wiedzę daje najlepsze odsetki”</i></p>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionDescribeEnglish />
          <SectionWordEnglish />
          <SectionPricesLanguageEnglish />

        </div>
      </div>
      
      <SectionFooter />

    </div>
  );
}

export default HowLearnPage;
