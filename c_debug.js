const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// แก้จุดที่ 1: ลบปีกกาออก หรือใส่ return b.late
const lateRoutes = buses.filter(b => b.late).map(b => b.route);

// แก้จุดที่ 2: ใส่ , 0 เป็นค่าเริ่มต้นหลังฟังก์ชัน reduce
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes);   // Output: ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);      // Output: 145