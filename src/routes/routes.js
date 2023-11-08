import ChangePassword from "../pages/change-password/ChangePassword";
import Items from "../pages/items/Items";
import PricedBill from "../pages/pricedBill/PricedBill";
import Requisition from "../pages/requisition/Requisition";
import Tender from "../pages/tender/Tender";

export const protectedRoutes = [
  {
    path: "/change-password",
    element: ChangePassword,
  },
  {
    path: "/requisition",
    element: Requisition,
  },
  {
    path: "/items",
    element: Items,
  },
  {
    path: "/tender",
    element: Tender,
  },
  {
    path: "/pricedBill",
    element: PricedBill,
  },
];
