import { DropDown } from "./DropDown";
import { Link } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("access_token");
  const isLoggedIn = token !== null;

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <svg
                width="177"
                height="19"
                viewBox="0 0 177 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.852273 3.58807V0.545454H15.1875V3.58807H9.84375V18H6.19602V3.58807H0.852273ZM18.2683 18V0.545454H30.0297V3.58807H21.9586V7.74716H29.4245V10.7898H21.9586V14.9574H30.0637V18H18.2683ZM49.0842 6.65625H45.3512C45.283 6.1733 45.1438 5.74432 44.9336 5.36932C44.7234 4.98864 44.4535 4.66477 44.1239 4.39773C43.7944 4.13068 43.4137 3.92614 42.9819 3.78409C42.5558 3.64205 42.0927 3.57102 41.5927 3.57102C40.6893 3.57102 39.9024 3.79545 39.2319 4.24432C38.5614 4.6875 38.0416 5.33523 37.6722 6.1875C37.3029 7.03409 37.1183 8.0625 37.1183 9.27273C37.1183 10.517 37.3029 11.5625 37.6722 12.4091C38.0472 13.2557 38.57 13.8949 39.2404 14.3267C39.9109 14.7585 40.6864 14.9744 41.5671 14.9744C42.0614 14.9744 42.5188 14.9091 42.9393 14.7784C43.3654 14.6477 43.7433 14.4574 44.0728 14.2074C44.4024 13.9517 44.6751 13.642 44.891 13.2784C45.1126 12.9148 45.266 12.5 45.3512 12.0341L49.0842 12.0511C48.9876 12.8523 48.7461 13.625 48.3597 14.3693C47.9791 15.108 47.4649 15.7699 46.8171 16.3551C46.1751 16.9347 45.408 17.3949 44.516 17.7358C43.6296 18.071 42.6268 18.2386 41.5075 18.2386C39.9507 18.2386 38.5586 17.8864 37.3313 17.1818C36.1097 16.4773 35.1438 15.4574 34.4336 14.1222C33.7291 12.7869 33.3768 11.1705 33.3768 9.27273C33.3768 7.36932 33.7347 5.75 34.4507 4.41477C35.1666 3.07955 36.1382 2.0625 37.3654 1.36364C38.5927 0.659091 39.9734 0.306818 41.5075 0.306818C42.5188 0.306818 43.4563 0.448863 44.32 0.732954C45.1893 1.01705 45.9592 1.43182 46.6296 1.97727C47.3001 2.51704 47.8455 3.17898 48.266 3.96307C48.6921 4.74716 48.9649 5.64489 49.0842 6.65625ZM52.4505 18V0.545454H56.1408V7.74716H63.6323V0.545454H67.3141V18H63.6323V10.7898H56.1408V18H52.4505ZM77.3514 18V0.545454H81.0418V7.74716H88.5332V0.545454H92.2151V18H88.5332V10.7898H81.0418V18H77.3514ZM95.9777 18V0.545454H107.739V3.58807H99.668V7.74716H107.134V10.7898H99.668V14.9574H107.773V18H95.9777ZM114.402 18H110.447L116.473 0.545454H121.228L127.245 18H123.291L118.919 4.53409H118.782L114.402 18ZM114.154 11.1392H123.495V14.0199H114.154V11.1392ZM131.04 0.545454L135.259 13.8068H135.421L139.648 0.545454H143.739L137.722 18H132.966L126.94 0.545454H131.04ZM146.56 18V0.545454H158.321V3.58807H150.25V7.74716H157.716V10.7898H150.25V14.9574H158.355V18H146.56ZM176.574 0.545454V18H173.387L165.793 7.0142H165.665V18H161.975V0.545454H165.213L172.748 11.5227H172.901V0.545454H176.574Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    메인페이지
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    고객센터
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    프로젝트 소개
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-end gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <label className="sr-only" htmlFor="search">
                    {" "}
                    Search{" "}
                  </label>

                  <input
                    className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                    id="search"
                    type="search"
                    placeholder="Search website..."
                  />

                  <button
                    type="button"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                <Link
                  to="#"
                  className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  <span className="sr-only">Notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </Link>
              </div>

              <span
                aria-hidden="true"
                className="block h-6 w-px rounded-full bg-gray-200"
              ></span>

              <div className="flex items-center gap-4">
                {isLoggedIn ? (
                  <DropDown />
                ) : (
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/login"
                      style={{ background: "#111827" }}
                    >
                      Login
                    </a>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium"
                        href="/signup"
                        style={{ color: "#111827" }}
                      >
                        Register
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
