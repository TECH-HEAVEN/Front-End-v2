import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { useAuth } from "../context/AuthContext";

export function DropDown() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };
  return (
    <Menu>
      <MenuHandler>
        <button className="bg-none border-none">
          <a href="#" className="block shrink-0">
            <span className="sr-only">Profile</span>
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>
        </button>
      </MenuHandler>
      <MenuList>
        <MenuItem>마이 페이지</MenuItem>
        <MenuItem>주문 내역</MenuItem>
        <MenuItem>환불 내역</MenuItem>
        <MenuItem>내 리뷰 목록</MenuItem>
        <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
      </MenuList>
    </Menu>
  );
}
