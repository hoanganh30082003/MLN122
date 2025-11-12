import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const PAGES = [
  // PHẦN II: HÀNH TRÌNH HỘI NHẬP
  { path: "/opening", label: "Giới Thiệu" },            // Màn 1
  { path: "/historical-context", label: "Bối Cảnh Lịch Sử" },    // Màn 2
  { path: "/opening-era", label: "Thời Kỳ Mở Cửa" },       // Màn 3
  { path: "/regional-integration", label: "Hội Nhập Khu Vực" },   // Màn 4
  // (Màn 5 & 6 là các giai đoạn tiếp theo của Timeline)

  // PHẦN III: VIỆT NAM - MẮT XÍCH QUAN TRỌNG
  { path: "/fdi-investment", label: "Dòng Vốn FDI" },          // Màn 7
  { path: "/global-supply-chain", label: "Chuỗi Cung Ứng Toàn Cầu" }, // Màn 8
  { path: "/agricultural-exports", label: "Nông Sản Vươn Tầm" },   // Màn 9
  { path: "/vietnamese-brands", label: "Thương Hiệu Việt" },      // Màn 10

  // PHẦN IV: PHÂN TÍCH & TƯƠNG LAI
  { path: "/social-impact", label: "Tác Động Tích Cực" },      // Màn 11
  { path: "/challenges-ahead", label: "Thách Thức Phía Trước" },    // Màn 12
  { path: "/future-economy", label: "Kinh Tế Tương Lai" },     // Màn 13
  { path: "/conclusion", label: "Kết Luận" }           // Màn 14

];

export default function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Xác định option đang active theo URL hiện tại
  const current = useMemo(() => {
    const hit = PAGES.find(p => pathname.startsWith(p.path));
    return hit ? hit.path : PAGES[0].path;
  }, [pathname]);

  return (
    <div className="nav noise">
      <motion.div
        className="nav-inner container"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div className="brand">E-BOOK</div>

        <label className="nav-sel-wrap" aria-label="Chuyển màn">
          <select
            className="nav-select"
            value={current}
            onChange={(e) => navigate(e.target.value)}
          >
            {PAGES.map(p => (
              <option key={p.path} value={p.path}>{p.label}</option>
            ))}
          </select>
          <span className="nav-select-caret" aria-hidden>▾</span>
        </label>
      </motion.div>
      <div className="header-spacer" />
    </div>
  );
}
