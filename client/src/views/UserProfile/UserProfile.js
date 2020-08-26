import React, { Fragment, useEffect, Link } from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import Spinner from "../../layouts/Spinner";
import { getFacultyById } from "../../actions/profile";
import ProfileResearchPapers from "./ProfileResearchPapers";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import avatar from "../../assets/img/tim_80x80.png";

import Navbar from "../../components/Navbars/Admin";
import Sidebar from "../../components/Sidebar/Admin";
import routes from "../../routes/Admin.js";
import styles from "../../assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../../assets/img/sidebar-2.jpg";
import logo from "../../assets/img/reactlogo.png";

let ps;

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const useStyles = makeStyles(styles);
var pathArray = window.location.pathname.split('/');

const Profile = ({ match, getFacultyById, profile, auth , ...rest }) => {
  useEffect(() => {
    getFacultyById(pathArray[2]);
  }, [getFacultyById, pathArray]);

  const classes = useStyles();

  const mainPanel = React.createRef();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
 

  return (
    <div className={classes.wrapper}>
     
      <Sidebar
        routes={routes}
        logoText={"Faculty Portal"}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={"blue"}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <br></br>
        <br></br>
        <br></br>

        <Fragment>
          {profile.profile === null || profile.loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card profile>
                    <CardHeader color="primary">
                      <CardAvatar profile>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={avatar} alt="..." />
                        </a>
                      </CardAvatar>
                      <h1 className={classes.cardTitle}>
                        {profile.profile.faculty.name}
                      </h1>
                      <h3 className={classes.cardCategory}>
                        {profile.profile.designation}
                      </h3>
                      
                    </CardHeader>
                    <CardBody profile>
                      <h2 className={classes.cardTitle}>
                        {profile.profile.bio}
                      </h2>
                      {profile.profile.website && (
                        <a
                          href={profile.profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fas fa-globe fa-2x"></i>
                        </a>
                      )}

                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="secondary">
                              <h2 className={classes.cardTitle}>Experience</h2>
                            </CardHeader>
                            <CardBody>
                              {profile.profile.experience.length > 0 ? (
                                <Fragment>
                                  <ProfileExperience
                                  // profile={profile.profile}
                                  ></ProfileExperience>
                                </Fragment>
                              ) : (
                                <h4 className={classes.cardTitle}>
                                  No Experience
                                </h4>
                              )}
                            </CardBody>
                          </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader color="secondary">
                              <h2 className={classes.cardTitle}>
                                Research Papers
                              </h2>
                            </CardHeader>
                            <CardBody>
                              {profile.profile.research_papers.length > 0 ? (
                                <Fragment>
                                  <ProfileResearchPapers
                                  // profile={profile.profile}
                                  ></ProfileResearchPapers>
                                </Fragment>
                              ) : (
                                <h4 className={classes.cardTitle}>
                                  No Resarch Papers
                                </h4>
                              )}
                            </CardBody>
                          </Card>
                        </GridItem>

                        <GridItem xs={12} sm={12} md={12}>
                          <Card>
                            <CardHeader>
                              <h2 className={classes.cardTitle}>Education </h2>
                            </CardHeader>
                            <CardBody>
                              {profile.profile.education.length > 0 ? (
                                <Fragment>
                                  <ProfileEducation
                                  // profile={profile.profile}
                                  ></ProfileEducation>
                                </Fragment>
                              ) : (
                                <h4 className={classes.cardTitle}>
                                  No Education
                                </h4>
                              )}
                            </CardBody>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    <CardFooter>
                      {auth.isAuthenticated &&
                        auth.loading === false &&
                        auth.faculty._id === profile.profile.faculty._id && (
                          <Button color="primary" round href="/edit-profile">
                            Edit Profile
                          </Button>
                        )}
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </Fragment>
          )}
        </Fragment>
      </div>
    </div>
  );
};

Profile.propTypes = {
  getFacultyById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  //auth so , if the profile user is viewing is of himself then edit profile button
});

export default connect(mapStateToProps, { getFacultyById })(Profile);
