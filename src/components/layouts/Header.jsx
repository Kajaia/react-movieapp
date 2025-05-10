export default function Header({ children, style }) {
  return (
    <header className="header">
      <div className={`container ${style}`}>{children}</div>
    </header>
  );
}
