import "../styles/main.css";
import { CollectionCard } from "../components/CollectionCard";
import { CircularPagination } from "../components/Pagination";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { CollectionProduct } from "../components/CollectionProduct";
import React, { useState } from "react";
import { Timer } from "../components/Timer";
import { Button } from "@material-tailwind/react";
const Main = ({ numCards }) => {
  // // CollectionCard 컴포넌트의 배열을 생성합니다.
  // const cards = Array.from({ length: numCards }, (_, index) => (
  //   <CollectionCard key={index} />
  // ));

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4; // 한 페이지에 표시할 카드 수
  const totalPages = Math.ceil(numCards / cardsPerPage);

  // 현재 페이지에 표시할 카드들을 결정합니다.
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = Array.from({ length: numCards }, (_, index) => (
    <CollectionCard key={index} />
  )).slice(indexOfFirstCard, indexOfLastCard);

  // 페이지네이션을 위한 함수들
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <header>
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Time Sale
            </h2>
            <p className="mt-4 max-w-md text-gray-500 mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>
          <div className="flex flex-row items-start justify-between">
            <Timer />
            <Button className="flex flex items-center mt-auto gap-2">
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
          <div className="collection-card-container">{currentCards}</div>

          <div className="pagination-container">
            <CircularPagination
              active={currentPage}
              totalPages={totalPages}
              onPaginate={paginate}
              onNext={nextPage}
              onPrev={prevPage}
            />
          </div>

          <FeaturedProduct />
          <CollectionProduct />
        </div>
      </div>
    </>
  );
};

export default Main;
