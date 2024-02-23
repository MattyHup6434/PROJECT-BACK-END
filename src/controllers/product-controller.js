// exports.getProductsLanding = (req, res, next) => {
//   // ส่งข้อความ JSON เพื่อแสดงว่ากำลังรับข้อมูลหน้าแรกของผลิตภัณฑ์
//   res.json({ message: "Get Products Landing Page" });
// };

// exports.getProducts = (req, res, next) => {
//   // ดึงข้อมูลจาก query parameters ที่ส่งมาจากคำขอ
//   const { search, promotion, brand, category } = req.query;
//   // ส่งข้อมูลกลับในรูปแบบ JSON พร้อมกับ query parameters ที่ได้รับ
//   res.json({ search, promotion, brand, category });
// };

// exports.getProductById = (req, res, next) => {
//   // ดึงข้อมูล productId จาก parameters ของคำขอ
//   const { productId } = req.params;
//   // ส่งข้อมูล productId กลับในรูปแบบ JSON
//   res.json({ productId });
// };
