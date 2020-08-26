import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../layouts/Spinner";
import { getFaculties } from "../../actions/profile";
//import profile from '../../reducers/profile';

//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
//import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { bugs, website, server } from "../../variables/general.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

import avatar from "../../assets/img/profile.png";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Profiles = ({ getFaculties, profile: { profiles, loading } }) => {
  useEffect(() => {
    getFaculties();
  }, [getFaculties]);

  const classes = useStyles();

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profiles">
            <GridContainer xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={6} md={12}>
                <GridContainer>
                {profiles.length > 0 ? (
                  profiles.map((profile) => (
                    
                    <GridItem xs={12} sm={6} md={6}>
                    <Card>
                      <CardHeader color="primary" stats icon>
                        <CardIcon color="info">
                          <Icon>
                            <Accessibility />
                          </Icon>
                        </CardIcon>
                        <CardAvatar profile>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <img src={avatar} alt="..." />
                          </a>
                        </CardAvatar>
                        <h2 className={classes.cardCategory}>
                          Faculty Members
                        </h2>
                        <h3 className={classes.cardTitle}>
                          Profile of {profile.faculty.name}
                        </h3>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                          <GridItem>
                            <h3>{profile.faculty.name}</h3>
                            {/* <ProfileItem key={profile._id} profile={profile} /> */}
                            <p>{profile.designation}</p>
                          </GridItem>
                          <GridItem>
                            <Fragment></Fragment>
                            <Fragment></Fragment>
                            <Fragment></Fragment>
                          </GridItem>
                          <GridItem>
                            <ul>
                              {profile.courses_teaching.map((skill, index) => (
                                <li key={index} className="text-primary">
                                  <i className="fas fa-check">
                                    {profile.courses_teaching[index]}
                                  </i>
                                </li>
                              ))}
                            </ul>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                      <CardFooter stats>
                        <Button
                          color="info"
                          round
                          href={`/profile/${profile.faculty._id}`}
                        >
                          View Profile
                        </Button>
                      </CardFooter>
                    </Card>
                    </GridItem>
                  ))
                ) : (
                  <h4>No Profiles Found</h4>
                )}
               
               </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getFaculties: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getFaculties })(Profiles);
