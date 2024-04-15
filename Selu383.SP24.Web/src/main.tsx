import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/homepage";
import Help from "./routes/help";
import HotelDetails from "./routes/home/hotel-details/hoteldetails";
import FindHotel from "./routes/home/FindHotel";
import BookingNO from "./routes/booking/bookingNO";
import BookingBR from "./routes/booking/bookingBR";
import BookingLC from "./routes/booking/bookingLC";
import { CachePolicies, Provider } from "use-http";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/find-hotel", element: <FindHotel /> },
  { path: "/hotel-details/:foo", element: <HotelDetails /> },
  { path: "/help", element: <Help /> },
  { path: "/bookingNO", element: <BookingNO/> },
  { path: "/bookingBR", element: <BookingBR/> },
  { path: "/bookingLC", element: <BookingLC/> }
]);

ReactDOM.render(
  <Provider options={{ cache: CachePolicies.NO_CACHE }}>
    <RouterProvider router={router} />
  </Provider>,
  document.getElementById("root")
);