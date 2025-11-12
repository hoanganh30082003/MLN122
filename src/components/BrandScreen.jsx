// components/BrandScreen.jsx
import React from "react";
import { motion } from "framer-motion";
import "./BrandScreen.css";

const brands = [
  // HÀNG 1
  {
    name: "VinFast",
    logo: "VinFast",
    desc: "Từ nhà máy Hải Phòng, xe điện VinFast đã chinh phục Mỹ, châu Âu và dẫn đầu Đông Nam Á về công nghệ.",
    color: "#C53030",
  },
  {
    name: "Viettel",
    logo: "Viettel",
    desc: "Phủ sóng 100% lãnh thổ Việt Nam, xuất khẩu công nghệ 5G sang 10 quốc gia, doanh thu quốc tế >2 tỷ USD.",
    color: "#D69E2E",
  },
  {
    name: "FPT",
    logo: "FPT",
    desc: "Từ công ty phần mềm nhỏ, FPT trở thành tập đoàn công nghệ toàn cầu, phục vụ 91 quốc gia với AI & Cloud.",
    color: "#3182CE",
  },
  {
    name: "TH True Milk",
    logo: "TH True Milk",
    desc: "Chuỗi trang trại bò sữa lớn nhất Đông Nam Á, xuất khẩu sữa sạch sang Trung Quốc, Thái Lan, Philippines.",
    color: "#38A169",
  },

  // HÀNG 2 – 4 THƯƠNG HIỆU MỚI BÊN PHẢI
  {
    name: "Vingroup",
    logo: "Vingroup",
    desc: "Tập đoàn tư nhân lớn nhất Việt Nam, dẫn đầu bất động sản, công nghệ, y tế và giáo dục toàn diện.",
    color: "#805AD5",
  },
  {
    name: "Viettel Post",
    logo: "Viettel Post",
    desc: "Mạng lưới logistics phủ 100% xã, giao hàng quốc tế 200+ nước, công nghệ AI tối ưu tuyến đường.",
    color: "#E53E3E",
  },
  {
    name: "Masan",
    logo: "Masan",
    desc: "Từ mì gói đến thịt sạch, Masan xây dựng hệ sinh thái tiêu dùng, doanh thu >3 tỷ USD/năm.",
    color: "#DD6B20",
  },
  {
    name: "VPBank",
    logo: "VPBank",
    desc: "Ngân hàng số hàng đầu, 10 triệu khách hàng, tiên phong Fintech & AI trong tài chính cá nhân.",
    color: "#2C5282",
  },
];

const BrandCard = ({ brand, index }) => {
  return (
    <motion.div
      className="brand-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="brand-logo">{brand.logo}</div>
      <h3 className="brand-name">{brand.name}</h3>
      <p className="brand-desc">{brand.desc}</p>
    </motion.div>
  );
};

export default function BrandScreen() {
  const constraintsRef = React.useRef(null);

  return (
    <div className="screen brand-screen">
      <motion.div
        className="screen-inner container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="screen-title">Những Thương Hiệu Việt Vươn Tầm</h1>
        <p className="screen-subtitle">
          Từ nội địa đến toàn cầu — những “ngọn cờ đầu” đang định hình tương lai Việt Nam.
        </p>

        {/* Desktop: 2 hàng x 4 card */}
        <div className="brands-grid-desktop">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} index={i} />
          ))}
        </div>

        {/* Mobile: Swipe ngang */}
        <motion.div
          ref={constraintsRef}
          className="brands-carousel"
        >
          <motion.div
            className="brands-track"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileTap={{ cursor: "grabbing" }}
          >
            {brands.map((brand, i) => (
              <BrandCard key={brand.name + "-mobile"} brand={brand} index={i} />
            ))}
          </motion.div>
        </motion.div>

        <div className="drag-hint">
          <span>Kéo để khám phá thêm thương hiệu →</span>
        </div>
      </motion.div>
    </div>
  );
}