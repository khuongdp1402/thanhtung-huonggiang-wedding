# Công thức Excel tạo link thiệp mời (có cột Xưng hô)

## Bố trí cột đề xuất

| Cột | Tên cột   | Ví dụ    | Ghi chú                    |
|-----|-----------|----------|----------------------------|
| A   | **Xưng hô** | Anh, Chị, Ông, Bà | Tiền tố xưng hô            |
| B   | **Tên**   | Khương, Hương   | Tên khách                  |
| C   | **Link thiệp** | (công thức) | URL dùng để gửi thiệp |

Dòng 1 dùng làm **tiêu đề**. Dữ liệu khách từ **dòng 2** trở đi.

---

## Công thức tạo link thiệp (cột C)

Giả sử **địa chỉ gốc trang thiệp** bạn đặt ở ô **E1** (ví dụ: `https://your-invitation.vercel.app`).

**Ô C2** (cho khách đầu tiên):

```excel
=E1&"?"&"salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)
```

- **A2** = Xưng hô  
- **B2** = Tên  
- `ENCODEURL` dùng để mã hóa tiếng Việt/dấu cho URL.

Kéo fill xuống cho các dòng tiếp theo (C3, C4, ...).

---

## Nếu có ô chứa địa chỉ gốc

Ví dụ ô **E1** = `https://your-invitation.vercel.app`

|   | A      | B      | C (công thức) |
|---|--------|--------|----------------|
| 1 | Xưng hô | Tên    | Link thiệp     |
| 2 | Anh   | Khương | `=E1&"?"&"salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2)` |
| 3 | Chị   | Hương  | (kéo công thức từ C2)     |

Kết quả C2 sẽ là:  
`https://your-invitation.vercel.app?salutation=Anh&guest=Kh%C6%B0%C6%A1ng`

---

## Link dạng có thể bấm (HYPERLINK)

Để cột C vừa là link bấm được, vừa hiển thị chữ tùy ý (ví dụ "Mở thiệp"):

```excel
=HYPERLINK(E1&"?"&"salutation="&ENCODEURL(A2)&"&guest="&ENCODEURL(B2); "Mở thiệp")
```

(Lưu ý: Excel tiếng Việt dùng **dấu chấm phẩy `;`** giữa các tham số.)

---

## Trường hợp chỉ có Tên (không có Xưng hô)

Nếu một số dòng để trống cột A (Xưng hô), link vẫn đúng: trang sẽ chỉ nhận `guest=...` và hiển thị tên không kèm xưng hô.

Nếu muốn **bỏ hẳn** tham số `salutation` khi ô A trống:

```excel
=E1&"?"&IF(A2=""; "guest="; "salutation="&ENCODEURL(A2)&"&guest=")&ENCODEURL(B2)
```

- A trống → URL dạng: `?guest=Khương`  
- A có "Anh" → URL dạng: `?salutation=Anh&guest=Khương`

---

## Tóm tắt tham số URL trang thiệp

| Tham số     | Tên khác (cùng ý nghĩa) | Ví dụ  |
|-------------|---------------------------|--------|
| salutation  | xung_ho, salutation_prefix | Anh, Chị, Ông, Bà |
| guest       | name, ten                | Khương, Hương    |

Cách dùng trên web: `?salutation=Anh&guest=Khương` → Bìa thiệp: "Kính gửi: Anh Khương"; câu "Sự hiện diện của **Anh** là...".
