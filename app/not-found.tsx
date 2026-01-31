export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="text-center px-4">
        <h2 className="text-4xl font-serif text-burgundy font-bold mb-4">
          404
        </h2>
        <p className="text-xl text-ink-dark mb-8">
          Trang không tìm thấy
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-burgundy text-white rounded-none hover:bg-burgundy-dark transition-colors font-semibold"
        >
          Quay về trang chủ
        </a>
      </div>
    </div>
  );
}
