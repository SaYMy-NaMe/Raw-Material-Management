import ChangePassword from "../pages/change-password/ChangePassword";
import Inventory from "../pages/inventory/Inventory";
import Items from "../pages/items/Items";
import PricedBill from "../pages/pricedBill/PricedBill";
import Receipt from "../pages/receipt/Receipt";
import Report from "../pages/reportInventory/Report";
import Requisition from "../pages/requisition/Requisition";
import Tender from "../pages/tender/Tender";
import UserList from "../pages/userList/UserList";

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
  {
    path: "/receipt",
    element: Receipt,
  },
  {
    path: "/inventory",
    element: Inventory,
  },
  {
    path: "/report",
    element: Report,
  },
  {
    path: "/userList",
    element: UserList,
  },
];
