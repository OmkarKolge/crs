import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/Home/HomeScreen'
import AboutScreen from './Screens/Home/AboutScreen'
import ContactUsScreen from './Screens/Home/ContactUsScreen'
import SignInScreen from './Screens/User/SignInScreen'
import SignUpScreen from './Screens/User/SignUpScreen'
import AdminHomeScreen from './Screens/Admin/AdminHomeScreen'
import EmployeeHomeScreen from './Screens/Employee/EmployeeHomeScreen'
import UserHomeScreen from './Screens/User/UserHomeScreen'
import EditProfileScreen from './Screens/Common/EditProfileScreen'
import CarListScreen from './Screens/Common/CarListScreen'
import AddCarScreen from './Screens/Admin/AddCarScreen'
import RemoveCarScreen from './Screens/Common/RemoveCarScreen'
import BookCarScreen from './Screens/User/BookCarScreen'
import UserFeedbackScreen from './Screens/User/UserFeedback'
import FeedbackHistoryScreen from './Screens/Admin/FeedbackHistoryScreen'
import Navigation from './Components/Navigation'
import BookCarFormScreen from './Screens/User/BookCarFormScreen'
import PaymentFormScreen from './Screens/User/PaymentScreen'
import CancelBookingScreen from './Screens/User/CancelBookingScreen'
import UserBookingListScreen from './Screens/Employee/UserBookingListScreen'
import PaymentHistoryScreen from './Screens/Admin/PaymentHistoryScreen';


function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomeScreen/>} />
            <Route path="/about" element={<AboutScreen/>} />
            <Route path="/contact" element={<ContactUsScreen/>} />

            <Route path="/signin" element={<SignInScreen/>} />
            <Route path="/signup" element={<SignUpScreen/>} />
            <Route path="/user-home" element={<UserHomeScreen/>} /> 
            <Route path="/user-edit-profile" element={<EditProfileScreen />} />
            <Route path="/user-car-list" element={<CarListScreen/>} />
            <Route path="/feedback" element={<UserFeedbackScreen />} />
            <Route path="/book-car" element={<BookCarScreen />} />
            <Route path="/book-car-form" element={<BookCarFormScreen />} />
            <Route path="/payment-screen" element={<PaymentFormScreen />} />
            <Route path="/manage-booking" element={<CancelBookingScreen />} />

            <Route path="/admin-home" element={<AdminHomeScreen />} /> 
            <Route path="/admin-edit-profile" element={<EditProfileScreen />} />
            <Route path="/add-car" element={<AddCarScreen />} />
            <Route path="/admin-car-list" element={<CarListScreen />} />
            <Route path="/remove-car" element={<RemoveCarScreen />} />
            <Route path="/feedback-list" element={<FeedbackHistoryScreen />} />
            <Route path="/payment-history" element={<PaymentHistoryScreen />}/>

            <Route path="/employee-home" element={<EmployeeHomeScreen />} />
            <Route path="/emp-edit-profile" element={<EditProfileScreen />} />
            <Route path="/emp-car-list" element={<CarListScreen />} />
            <Route path="/remove-car" element={<RemoveCarScreen />} />
            <Route path="/booking-list" element={<UserBookingListScreen />} />

          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
