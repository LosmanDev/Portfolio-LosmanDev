export default function Footer() {
  return (
    <footer className="body-font rounded">
      <div className="dark:bg-black">
        <div className="dark:text-white container mx-auto py-4 px-5 flex flex-wrap flex-col justify-center items-center sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            LosmanDev © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
