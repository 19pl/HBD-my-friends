# 🎂 HBD-my-friends

เว็บแอปพลิเคชันการ์ดอวยพรวันเกิดสุดน่ารัก สไตล์ Sweet Pink Theme พร้อมลูกเล่นเป่าเค้ก จุดเทียน และใส่ชื่อเจ้าของวันเกิดได้แบบ Personalized!

> ส่วนหนึ่งของ **LEARN ANYTHING IN 5 DAYS CHALLENGE (Soft Skill 3) 305201**

---

## ✨ ฟีเจอร์เด่น (Features)

1. **Step Flow (ระบบ 2 ขั้นตอน)**:
   - **Step 1 (หน้ากรอกชื่อ)**: เมื่อเปิดเว็บจะพบการ์ดต้อนรับให้กรอกชื่อเจ้าของวันเกิดก่อน
   - **Step 2 (หน้าฉลองวันเกิด)**: เมื่อกด "ถัดไป ➔" จะเปลี่ยนไปยังหน้าเค้กพร้อมหัวข้อ **`HAPPY DAY TO [ชื่อ] 💖🎂`**
2. **Interactive Cake & Candles**:
   - ปุ่ม **"จุดเทียน 🕯️"**: จุดเปลวไฟบนเค้ก พร้อมข้อความเตือนให้อธิษฐาน
   - ปุ่ม **"เป่าเค้ก 💨"**: เป่าดับเปลวไฟ มีเอฟเฟกต์ควันลอยขึ้น พร้อมสุ่มคำอวยพรวันเกิดสุดน่ารักที่มีชื่อเจ้าของวันเกิด
3. **URL Parameter & Quick Share**:
   - รองรับการส่งผ่านลิงก์ `?name=ชื่อเพื่อน` (เมื่อผู้รับเปิดลิงก์ จะข้ามไปยังหน้าเค้กวันเกิดทันทีเพื่อความเซอร์ไพรส์!)
   - มีปุ่ม **"🔗 คัดลอกลิงก์"** เพื่อคัดลอก URL ส่งต่อให้เพื่อนใน LINE หรือโซเชียลมีเดียได้ทันที พร้อมพรีวิว Open Graph และ Favicon น่ารักๆ
4. **Performance & Accessibility (A11y)**:
   - ปรับแต่งจำนวน Confetti ให้อยู่ในระดับที่ลื่นไหล 60 FPS บนมือถือ
   - รองรับ `prefers-reduced-motion` สำหรับผู้ใช้ที่ต้องการลดการเคลื่อนไหว
   - รองรับการใช้งานผ่านคีย์บอร์ด (Focus Management, Tab, Enter) และ Screen Reader (ARIA labels)

---

## 🚀 วิธีเปิดใช้งาน (How to Run)

เนื่องจากเป็น Static Web (HTML, CSS, JavaScript) สามารถเปิดใช้งานได้ง่ายๆ:

1. **เปิดผ่านเบราว์เซอร์โดยตรง**:
   - ดับเบิลคลิกที่ไฟล์ `index.html` เพื่อเปิดบน Google Chrome, Safari, หรือ Edge ได้ทันที

2. **เปิดผ่าน Live Server (VS Code / Local Server)**:
   - หากใช้ VS Code: ติดตั้ง Extension **Live Server** แล้วคลิกขวาที่ `index.html` เลือก **"Open with Live Server"**
   - หรือรันผ่านคำสั่ง Python:
     ```bash
     python -m http.server 8000
     ```
     แล้วเข้าไปที่ `http://localhost:8000`

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **HTML5**: โครงสร้าง Semantic, Meta Tags และ Open Graph
- **CSS3**: Sweet Pastel Gradients, Keyframe Animations, Glassmorphism, Responsive Web Design
- **JavaScript & jQuery 3.6.0**: การจัดการ Event, Animation State, Focus Management และ Clipboard API
