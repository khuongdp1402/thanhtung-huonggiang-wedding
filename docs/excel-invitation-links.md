# Công thức Excel tạo link thiệp mời (có 2 Mode: Nhà Gái & Nhà Trai)

## Bố trí cột đề xuất

| Cột | Tên cột   | Ví dụ    | Ghi chú                    |
|-----|-----------|----------|----------------------------|
| A   | **Xưng hô** | Anh, Chị, Ông, Bà | Tiền tố xưng hô            |
| B   | **Tên**   | Khương, Hương   | Tên khách                  |
| C   | **Link Nhà Gái** | (công thức) | URL cho khách bên nhà gái |
| D   | **Link Nhà Trai** | (công thức) | URL cho khách bên nhà trai |

Dòng 1 dùng làm **tiêu đề**. Dữ liệu khách từ **dòng 2** trở đi.

**Cell E1**: Đặt địa chỉ gốc (ví dụ: `https://your-domain.com`)

---

## Công thức tạo link thiệp

### 1. Link cho Nhà Gái (Cột C)

**Ô C2:**

```excel
=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhagai"
```

**Hoặc:**

```excel
=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=bride"
```

**Hiển thị:**
- Lễ Vu Quy
- Thứ Năm, 12/02/2026
- Tư Gia Nhà Gái
- Tân Nương & Tân Lang

---

### 2. Link cho Nhà Trai (Cột D)

**Ô D2:**

```excel
=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhatrai"
```

**Hoặc:**

```excel
=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=groom"
```

**Hiển thị:**
- Lễ Tân Hôn
- Thứ Sáu, 13/02/2026
- Tư Gia Nhà Trai
- Tân Lang & Tân Nương

---

## Ví dụ trong Excel

| | A | B | C (Link Nhà Gái) | D (Link Nhà Trai) |
|-|---|---|------------------|-------------------|
| 1 | Xưng hô | Tên | Link Nhà Gái | Link Nhà Trai |
| 2 | Anh | Khương | `=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhagai"` | `=$E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhatrai"` |
| 3 | Chị | Hương | (kéo từ C2) | (kéo từ D2) |

**Cell E1:** `https://thanhtung-huonggiang.vercel.app`

**Kết quả C2:**  
```
https://thanhtung-huonggiang.vercel.app?salutation=Anh&guest=Kh%C6%B0%C6%A1ng&mode=nhagai
```

**Kết quả D2:**  
```
https://thanhtung-huonggiang.vercel.app?salutation=Anh&guest=Kh%C6%B0%C6%A1ng&mode=nhatrai
```

---

## Cách sử dụng

1. Điền địa chỉ website vào cell **E1**
2. Copy công thức vào **C2** (nhà gái) và **D2** (nhà trai)
3. Kéo xuống để áp dụng cho tất cả khách mời
4. Copy link từ cột C hoặc D để gửi cho khách tương ứng

Kéo fill xuống cho các dòng tiếp theo (C3, C4, D3, D4, ...).

---

## Link dạng có thể bấm (HYPERLINK)

### Nhà Gái (Cột C):
```excel
=HYPERLINK($E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhagai"; "Mở thiệp Nhà Gái")
```

### Nhà Trai (Cột D):
```excel
=HYPERLINK($E$1&"?salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)&"&mode=nhatrai"; "Mở thiệp Nhà Trai")
```

(Lưu ý: Excel tiếng Việt dùng **dấu chấm phẩy `;`** giữa các tham số.)

---

## Trường hợp chỉ có Tên (không có Xưng hô)

### Nhà Gái:
```excel
=$E$1&"?"&IF(A2=""; "guest="; "salutation="&ENCODEURL(A2)&"&guest=")&ENCODEURL(B2)&"&mode=nhagai"
```

### Nhà Trai:
```excel
=$E$1&"?"&IF(A2=""; "guest="; "salutation="&ENCODEURL(A2)&"&guest=")&ENCODEURL(B2)&"&mode=nhatrai"
```

- A trống → URL dạng: `?guest=Khương&mode=nhagai`  
- A có "Anh" → URL dạng: `?salutation=Anh&guest=Khương&mode=nhagai`

---

## Tóm tắt tham số URL trang thiệp

| Tham số     | Tên khác (cùng ý nghĩa) | Ví dụ  |
|-------------|---------------------------|--------|
| salutation  | xung_ho, salutation_prefix | Anh, Chị, Ông, Bà |
| guest       | name, ten                | Khương, Hương    |

Cách dùng trên web: `?salutation=Anh&guest=Khương` → Bìa thiệp: "Kính gửi: Anh Khương"; câu "Sự hiện diện của **Anh** là...".
