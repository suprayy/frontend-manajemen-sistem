import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Daftar = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registStatus, setRegistStatus] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/daftar", {
        nama: nama,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message) {
          setRegistStatus("Daftar Gagal!");
        } else {
          setRegistStatus("Berhasil");
          navigate("/masuk");
        }
      })
      .catch((error) => {
        console.log({ error, message: "error cuy" });
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Daftar
          </h2>
          <p className="text-center">{registStatus}</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="nama"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nama
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                  id="nama"
                  name="nama"
                  type="nama"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </form>

          <div>
            <button
              onClick={register}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Daftar
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a href="/masuk">Not a member? </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Daftar;
