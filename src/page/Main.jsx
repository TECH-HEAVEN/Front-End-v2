import "../styles/main.css";
import { CollectionCard } from "../components/CollectionCard";
import { CircularPagination } from "../components/Pagination";
import { FeaturedProduct } from "../components/FeaturedProduct";
import { CollectionProduct } from "../components/CollectionProduct";
import { useState } from "react";
import { CarouselCustomNavigation } from "../components/CarouselCustomNavigation";
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
