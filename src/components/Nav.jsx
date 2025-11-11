import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav(){
  return (
    <div className="nav noise">
      <motion.div
        className="nav-inner container"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div className="brand">MLN122 • E-BOOK</div>
        <div className="links">
          <NavLink to="/screen-2" className={({isActive})=>isActive?'active':''}>Bối cảnh lịch sử</NavLink>
          <NavLink to="/screen-3" className={({isActive})=>isActive?'active':''}>Bình minh mở cửa</NavLink>
          <NavLink to="/phase-2" className={({isActive})=>isActive?'active':''}>Vươn Ra Khu Vực</NavLink>
        <NavLink to="/factory" className={({isActive})=>isActive?'active':''}>"Công Xưởng" Mới</NavLink>
        </div>
      </motion.div>
      <div className="header-spacer" />
    </div>
  );
}
