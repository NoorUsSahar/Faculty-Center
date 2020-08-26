//Fetch token/data from action then bring in from the redux and pass it down to other dashboards for viewh data

import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentFaculty } from "../../actions/profile";
import Spinner from "../../layouts/Spinner";
// import ResearchPapers from './ResearchPapers';
// import Education from './Education';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import { getFaculties } from "../../actions/profile";
import { getCurrentEvents } from "../../actions/event";
// import Accessibility from "@material-ui/icons/Accessibility";
// import CardAvatar from "../../components/Card/CardAvatar.js";
import avatar from "../../assets/img/profile.png";
// import Table from "../../components/Table/Table.js";
// import Tasks from "../../components/Tasks/Tasks.js";
// import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
// import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
// import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Calendar from "react-calendar";
import { Button } from "@material-ui/core";
import { bugs, website, server } from "../../variables/general.js";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "../../variables/charts.js";
// import Icon from "@material-ui/core/Icon";
// import Warning from "@material-ui/icons/Warning";
import { makeStyles } from "@material-ui/core";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "0.9rem",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    fontSize: "1.3rem",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleBlack: {
    color: "#0c0c0d",
    fontSize: "1rem",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "500",
      lineHeight: "1",
    },
  },
  cardCategoryBlack: {
    "&,& a,& a:hover,& a:focus": {
      color: "#0c0c0d",
      margin: "0",
      fontSize: "0.9rem",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#0c0c0d",
    },
  },
};

const useStyles = makeStyles(styles);
const Dashboard = ({
  getCurrentFaculty,
  auth: { faculty },
  profile: { profile, profiles, loading },
  getFaculties,
  event: { event },
  getCurrentEvents,
}) => {
  useEffect(() => {
    getCurrentFaculty();
    getFaculties();
    getCurrentEvents();
  }, [getCurrentFaculty, getFaculties, getCurrentEvents]);

  let myEventList = [];
  if (event != null) {
    myEventList = event.event;
  }

  const classes = useStyles();
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>
                {" "}
                Welcome {faculty && faculty.name}
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="success">
                      <h4 className={classes.cardTitleBlack}>Profile</h4>
                    </CardHeader>

                    {profile != null ? (
                      <Fragment>
                        <CardBody>
                          <GridContainer>
                            <GridItem xs={12} sm={6} md={12}>
                              <h2>{profile.faculty.name}</h2>
                              {/* <ProfileItem key={profile._id} profile={profile} /> */}
                              <p>{profile.designation}</p>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={12}>
                              <Fragment></Fragment>
                              <Fragment></Fragment>
                              <Fragment></Fragment>
                              <h3> Bio : {profile.bio}</h3>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={12}>
                              <ul>
                                {" "}
                                Courses Teaching
                                {profile.courses_teaching.map(
                                  (skill, index) => (
                                    <li key={index} className="text-primary">
                                      <i className="fas fa-check">
                                        {profile.courses_teaching[index]}
                                      </i>
                                    </li>
                                  )
                                )}
                              </ul>
                            </GridItem>
                          </GridContainer>
                        </CardBody>
                        <CardFooter>
                          <Button
                            color="primary"
                            variant="outlined"
                            round
                            href={`/profile/${profile.faculty._id}`}
                            size="medium"
                          >
                            View Profile
                          </Button>
                          <Button
                            color="primary"
                            variant="outlined"
                            round
                            href="/edit-profile"
                            size="medium"
                          >
                            Edit Profile
                          </Button>
                        </CardFooter>
                      </Fragment>
                    ) : (
                      <CardBody>
                        <GridContainer>
                          <GridItem>
                            Create your profile...............
                            <Button
                              color="primary"
                              variant="outlined"
                              round
                              href={"/create-profile"}
                            >
                              Create Profile
                            </Button>
                          </GridItem>
                        </GridContainer>
                      </CardBody>
                    )}

                    <CardFooter stats></CardFooter>
                  </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="warning">
                      <h4 className={classes.cardTitleBlack}>Calendar </h4>
                    </CardHeader>
                    <CardBody>
                      <Calendar events={myEventList}></Calendar>
                    </CardBody>
                    <CardFooter>
                      <Button
                        color="primary"
                        variant="outlined"
                        round
                        href="/calendar"
                        size="medium"
                      >
                        Calendar
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="danger">
                      <GridContainer>
                        {" "}
                        <GridItem xs={12} sm={12} md={6}>
                          <h4 className={classes.cardTitleBlack}>
                            Faculty Members
                          </h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <Button
                            // color="info"
                            round
                             variant="contained"
                            href="/profiles"
                          >
                            View All Profiles
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </CardHeader>
                    <CardBody>
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
                                      profiles.map((profile , index) => (
                                        <GridItem xs={12} sm={6} md={12}>
                                          {index < 2 ? ( 
                                             <Card>
                                             <CardBody>
                                               <GridContainer>
                                                 <GridItem xs={12} sm={6} md={6}>
                                                   <h3>
                                                     {profile.faculty.name}
                                                   </h3>
                                                   {/* <ProfileItem key={profile._id} profile={profile} /> */}
                                                   <p>{profile.designation}</p>
                                                 </GridItem>
                                                 <GridItem xs={12} sm={6} md={6}>
                                                   <Button
                                                     color="primary"
                                                     round
                                                     variant="outlined"
                                                     href={`/profile/${profile.faculty._id}`}
                                                   >
                                                     View Profile
                                                   </Button>
                                                 </GridItem>
                                               </GridContainer>
                                             </CardBody>
                                           </Card>
                                          ) : (<br></br> )}
                                         
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
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="info">
                      <h4 className={classes.cardTitleBlack}>
                        Add other Info In your Profile
                      </h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button
                            color="primary"
                            round
                            variant="outlined"
                            href="/add-research-papers"
                          >
                            Add Research Papers
                          </Button>
                          <br></br>
                          <br></br>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button
                            color="primary"
                            round
                            variant="outlined"
                            href="/add-education"
                          >
                            Add Education
                          </Button>
                          <br></br>
                          <br></br>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <Button
                            color="primary"
                            round
                            variant="outlined"
                            href="/add-experience"
                          >
                            Add Experience
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* {profile !== null ? (
        <Fragment>
          <div class="dash-buttons">
            <Link to={`/profile/${faculty._id}`} class="btn btn-light">
              <i class="fas fa-user-circle text-primary"></i> View Profile
            </Link>
            <Link to="/profiles" class="btn btn-light">
              <i class="fas fa-user-circle text-primary"></i> Other Members.com
            </Link>
            <Link to="/edit-profile" class="btn btn-light">
              <i class="fas fa-user-circle text-primary"></i> Edit Profile
            </Link>
            <Link to="/add-research-papers" class="btn btn-light">
              <i class="fab fa-black-tie text-primary"></i> Add Research Papers
            </Link>
            <Link to="/add-experience" class="btn btn-light">
              <i class="fab fa-black-tie text-primary"></i> Add Experience
            </Link>
            <Link to="/add-education" class="btn btn-light">
              <i class="fas fa-graduation-cap text-primary"></i> Add Education
            </Link>
            <Link to="/calendar" class="btn btn-light">
              <i class="fas fa-graduation-cap text-primary"></i> Calendar
            </Link>
          </div>
          {/* <Calendar></Calendar> */}
      {/* <ResearchPapers research_papers={profile.research_papers}></ResearchPapers>
   
          <Education education={profile.education}></Education> */}
      {/* </Fragment> */}
      {/* // ) : (
        // <Fragment>
        //   <p>You have not setup a profile , please add some info</p>
        //   <Link to="/create-profile" className="btn btn-primary my-1">
        //     Create Profile
        //   </Link>
        // </Fragment>
      // )} */}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentFaculty: PropTypes.func.isRequired,
  getFaculties: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentEvents: PropTypes.func.isRequired,

  event: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
  event: state.event,
});

export default connect(mapStateToProps, {
  getCurrentFaculty,
  getFaculties,
  getCurrentEvents,
})(Dashboard);
