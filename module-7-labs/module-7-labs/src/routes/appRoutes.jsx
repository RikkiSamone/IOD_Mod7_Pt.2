import Homepage from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound";
import ProtectedRoute from "./protectedRoutes";
import BitCoinPage from "../pages/BitCoinPage";
import EmojiPage from "../pages/emojiPage";
import LoginForm from "../components/Login/form";


function AppRoutes(props) {

return (
<Routes>
{/* index matches on default/home URL: / */}
<Route index element={<Homepage {...props} />} />
        {/* nested routes, matches on /dash/tasks etc */}
<Route path='/login' element={<LoginForm {...props} />} />
<Route path='/bitcoin' element={<BitCoinPage {...props} />} />
<Route path='/emoji' element={<EmojiPage {...props} />} />

{/* special route to handle if none of the above match */}
        <Route path="*" element={<PageNotFound />} />

</Routes>
)
}

export default AppRoutes;