// ฟังก์ชันคำนวณค่ารถ NGV มหาวิทยาลัย
const calcFare = (distanceKm) => {
  // ตรวจสอบค่าระยะทางติดลบ หรือไม่ใช่ตัวเลข ให้คืนค่า 0
  if (typeof distanceKm !== "number" || distanceKm < 0) {
    return 0;
  }

  // ปัดเศษกิโลเมตรขึ้น (เช่น 1.5 -> 2, 7.2 -> 8)
  const distance = Math.ceil(distanceKm);

  // กรณี 2 กิโลเมตรแรก คิดราคาเหมา 10 บาท
  if (distance <= 2) {
    return 10;
  }

  // กรณีเกิน 2 กิโลเมตร: 10 บาทแรก + (ระยะทางที่เหลือ * 2 บาท)
  return 10 + (distance - 2) * 2;
};

// console.log ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // คาดหวัง: 10
console.log(calcFare(2));   // คาดหวัง: 10
console.log(calcFare(7.2)); // คาดหวัง: 22