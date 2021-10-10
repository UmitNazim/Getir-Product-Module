import { AtomButton } from 'components';
import { useState } from 'react';

const OrganismPagination = ({ perPage, totalCount, onPaginate }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const pages = Array.from({ length: Math.ceil(totalCount / perPage) }, (_, i) => i + 1);

  const onPagination = (item) => {
    onPaginate(item);
    setPaginationPage(item._page);
  };

  return (
    <div className="text-center">
      {pages.map((page) => (
        <AtomButton
          shadow
          key={page}
          className={['mx-1']}
          style={{ minWidth: '32px' }}
          color={paginationPage === page ? 'white' : 'stormy-grey'}
          bgColor={paginationPage === page ? 'ball-blue' : 'transparent'}
          onClick={() => onPagination({ _page: page, _limit: perPage })}
        >
          {page}
        </AtomButton>
      ))}
    </div>
  );
};

export default OrganismPagination;
