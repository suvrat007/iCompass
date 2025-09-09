function Error({ statusCode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">{statusCode || 'Error'}</h1>
        <p className="text-emerald-300 mb-8">Something went wrong!</p>
        <a href="/" className="px-6 py-3 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition">
          Go Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
