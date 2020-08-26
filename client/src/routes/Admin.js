import DashboardIcon from '@material-ui/icons/Dashboard';
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
 import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
import ProfilesIcon from '@material-ui/icons/SupervisorAccountRounded';
import EditProfileIcon from '@material-ui/icons/PersonOutline';

 import Dashboard from '../views/Dashboard/Dashboard';
 import Faculty from '../layouts/Dashboard'
import Profiles from '../views/Profiles/Profiles';
// import EditProfile from '../views/Faculty/EditProfile'
// import EditProfile from '../layouts/EditProfile'


const routes = [
  {
   path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Faculty,
    
    href : '/dashboard',
    layout: '/admin',
  },
  {
    path: '/edit-profile',
    name: 'Edit Profile',
    icon: EditProfileIcon,
    //  component: EditProfile,
    href : 'google.com',
    layout: '/admin',
  },
      {
      path: '/user',
      name: 'User Profile',
      // rtlName: 'ملف تعريفي للمستخدم',
      icon: Person,
      // component: UserProfile,
      layout: '/admin',
    },
  {
    path: '/profiles',
    name: 'Profiles',
    icon: ProfilesIcon,
component: Profiles,
    // href : 'http://localhost:3000/profiles',
    layout: '/',
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: CalendarTodayIcon,
 
  href : '/calendar',
    layout: '/admin',
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: DashboardIcon,
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    // component: NotificationsPage,
    layout: '/admin',
  },

  //   {
  //     path: '/table',
  //     name: 'Table List',
  //     rtlName: 'قائمة الجدول',
  //     icon: 'content_paste',
  //     component: TableList,
  //     layout: '/admin',
  //   },
    {
      path: '/typography',
      name: 'Courses',
      rtlName: 'طباعة',
      icon: LibraryBooks,
      // component: Typography,
      layout: '/admin',
    },
    {
      path: '/icons',
      name: 'Reports',
      rtlName: 'الرموز',
      icon: BubbleChart,
      // component: Icons,
      layout: '/admin',
    },
  //   {
  //     path: '/maps',
  //     name: 'Maps',
  //     rtlName: 'خرائط',
  //     icon: LocationOn,
  //     component: Maps,
  //     layout: '/admin',
  //   },
  
  //   {
  //     path: '/rtl-page',
  //     name: 'RTL Support',
  //     rtlName: 'پشتیبانی از راست به چپ',
  //     icon: Language,
  //     component: RTLPage,
  //     layout: '/rtl',
  //   },
  //   {
  //     path: '/upgrade-to-pro',
  //     name: 'Upgrade To PRO',
  //     rtlName: 'التطور للاحترافية',
  //     icon: Unarchive,
  //     component: UpgradeToPro,
  //     layout: '/admin',
  //   },
];

export default routes;
