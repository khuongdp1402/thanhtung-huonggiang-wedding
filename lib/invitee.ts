/**
 * Đọc thông tin khách mời từ URL: tiền tố xưng hô (salutation) + tên (name).
 * Ví dụ: ?salutation=Anh&guest=Khương → "Anh Khương"
 */

function decodeParam(value: string | null): string | null {
  if (!value || typeof value !== "string") return null;
  try {
    // Decode URL parameter. Modern URL encoding uses %20 for space and %2B for +
    // so we don't need to replace + with space anymore
    return decodeURIComponent(value).trim() || null;
  } catch {
    return null;
  }
}

export function getInviteeFromSearchParams(searchParams: URLSearchParams): {
  /** Salutation + name: "Anh Khương" — dùng cho bìa thiệp và câu "tới dự buổi tiệc..." */
  inviteeLabel: string;
  /** Chỉ tiền tố xưng hô — dùng cho câu "Sự hiện diện của ...": "Anh", "Chị", hoặc "quý khách" nếu không có */
  salutationOnly: string;
  /** Có thông tin khách (salutation hoặc name) → hiển thị "Kính gửi: ..." */
  hasInvitee: boolean;
} {
  const salutation = decodeParam(
    searchParams.get("salutation") || searchParams.get("xung_ho") || searchParams.get("salutation_prefix")
  );
  const name = decodeParam(
    searchParams.get("guest") || searchParams.get("name") || searchParams.get("ten")
  );

  const parts = [salutation, name].filter(Boolean) as string[];
  const inviteeLabel = parts.length > 0 ? parts.join(" ") : "quý khách";
  const salutationOnly = salutation ?? "quý khách";
  const hasInvitee = parts.length > 0;

  return { inviteeLabel, salutationOnly, hasInvitee };
}
