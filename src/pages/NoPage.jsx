const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404!</h1>
      <p className="mt-4 text-xl font-semibold">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 mt-6 text-white rounded-lg shadow-md cursor-pointer bg-amber-500 hover:bg-amber-600"
      >
        Go Home
      </a>
    </div>
  );
};

export default NoPage;
