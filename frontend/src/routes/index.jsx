import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import NftDetails from "../components/pages/nft_details";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/nft/:id',
        element: <NftDetails/>
      }
    ]
  }
])
export default router;