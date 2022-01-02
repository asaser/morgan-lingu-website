import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import NavPills from "components/NavPills/NavPills.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.js";

import bg11 from "assets/img/bg11.jpg";
import city from "assets/img/examples/city.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.pricing}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Język Rosyjski</h2>
              {/* <h5 className={classes.description}>
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h5> */}
              {/* <div className={classes.sectionSpace} /> */}
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing plain>
                <CardBody pricing plain>
                  <h6 className={classes.cardCategory}>ZAJĘCIA INDYWIDUALNE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 0
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      ONLINE
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="danger" round>
                    Zapisz się
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing color="success">
                <CardBody pricing>
                  <h6 className={classes.marginBottom30}>ZAJĘCIA DLA 2 OSÓB</h6>
                  <h1 className={classes.cardTitleWhite}>
                    <small>$</small> 89
                  </h1>
                  <ul>
                    <li>
                      <Check /> ONLINE
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="white" round disabled>
                    Zapisz się
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={4}>
              <Card pricing plain>
                <CardBody pricing>
                  <h6 className={classes.cardCategory}>ZAJĘCIA GRUPOWE</h6>
                  <h1 className={classes.cardTitle}>
                    <small>$</small> 189
                  </h1>
                  <ul>
                    <li>
                      <Success>
                        <Check />
                      </Success>{" "}
                      ONLINE
                    </li>
                  </ul>
                </CardBody>
                <CardFooter pricing className={classes.justifyContentCenter}>
                  <Button color="success" round>
                    Zapisz się
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
