export default function DarkMode() {
  const toggle = () => {
    document.body.classList.toggle("dark");
  };

  return <button onClick={toggle}>Toggle Dark Mode</button>;
}