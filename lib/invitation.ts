export type InvitationData = {
  groom: {
    name: string;
    parents: {
      father: string;
      mother: string;
    };
  };
  bride: {
    name: string;
    parents: {
      father: string;
      mother: string;
    };
  };
  ceremony: {
    title: string;
    solarDateLabel: string;
    lunarDateLabel: string;
    timeLabel: string;
    venueName: string;
    address: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    startsAtISO: string;
  };
  quote: string;
  gallery: Array<{
    src: string;
    alt: string;
    className: string;
    parallax: number;
  }>;
  gifting?: {
    groom: {
      accountName: string;
      accountNumber: string;
      bankName: string;
      address: string;
      phone: string;
    };
    bride: {
      accountName: string;
      accountNumber: string;
      bankName: string;
      address: string;
      phone: string;
    };
  };
};

export const invitation: InvitationData = {
  groom: {
    name: "Thanh Tùng",
    parents: {
      father: "Ông Đặng Công Tí",
      mother: "Bà Đỗ Thị Bạch Tuyết"
    }
  },
  bride: {
    name: "Hương Giang",
    parents: {
      father: "Ông Nguyễn Văn Quý",
      mother: "Bà Lê Thị Gái"
    }
  },
  ceremony: {
    title: "Lễ Tân Hôn",
    solarDateLabel: "Thứ Sáu, 13/02/2026",
    lunarDateLabel: "Nhằm ngày 26 tháng 12 năm Ất Tỵ",
    timeLabel: "11:00",
    venueName: "Tư Gia Nam",
    address: "Khu phố Lại Khánh Nam, phường Bồng Sơn, tỉnh Gia Lai",
    googleMapsUrl: "https://maps.app.goo.gl/JFYVdwMC6nBeyviS7",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.922444634283!2d109.012586!3d14.484214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f456c8025547d%3A0x6b490f2095cc606!2zQuG7k25nIFPGoW4sIEhv4aSBOaMahbiwgQsOsbmggxJDhu4tuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700000000000",
    startsAtISO: "2026-02-13T11:00:00+07:00"
  },
  quote: "Hạnh phúc là có bạn bên cạnh trong ngày trọng đại.",
  gallery: [
    {
      src: "/gallery/01.jpg",
      alt: "Ảnh cưới 01",
      className: "col-span-12 md:col-span-7 row-span-2",
      parallax: 18
    },
    {
      src: "/gallery/02.jpg",
      alt: "Ảnh cưới 02",
      className: "col-span-12 md:col-span-5 row-span-1",
      parallax: 10
    },
    {
      src: "/gallery/03.jpg",
      alt: "Ảnh cưới 03",
      className: "col-span-12 md:col-span-5 row-span-2",
      parallax: 22
    },
    {
      src: "/gallery/04.jpg",
      alt: "Ảnh cưới 04",
      className: "col-span-12 md:col-span-7 row-span-1",
      parallax: 12
    },
    {
      src: "/gallery/05.jpg",
      alt: "Ảnh cưới 05",
      className: "col-span-12 md:col-span-4 row-span-1",
      parallax: 14
    },
    {
      src: "/gallery/06.jpg",
      alt: "Ảnh cưới 06",
      className: "col-span-12 md:col-span-8 row-span-1",
      parallax: 8
    }
  ],
  gifting: {
    groom: {
      accountName: "Đặng Thanh Tùng",
      accountNumber: "123456789",
      bankName: "Vietcombank",
      address: "Khu phố Lại Khánh Nam, phường Bồng Sơn, TX Hoài Nhơn, Bình Định",
      phone: "0987 654 321"
    },
    bride: {
      accountName: "Nguyễn Hương Giang",
      accountNumber: "987654321",
      bankName: "Techcombank",
      address: "Phường Bồng Sơn, TX Hoài Nhơn, Bình Định",
      phone: "0123 456 789"
    }
  }
};
