/* eslint-disable react/prop-types */
function Score({ score }) {
  return (
    <div className="text-center bg-gray-200 p-4 rounded-lg mt-4">
      <p className="text-xl font-semibold text-blue-600">
        Score: {score} out of 20
      </p>
    </div>
  );
}

export default Score;