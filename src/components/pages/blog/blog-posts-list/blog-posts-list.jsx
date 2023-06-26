import clsx from 'clsx';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostCard from 'components/pages/blog/blog-post-card';
import { blogPostCardPropTypes } from 'components/pages/blog/blog-post-card/blog-post-card';
import Pagination from 'components/shared/pagination';
import SubscriptionForm from 'components/shared/subscription-form';
import { BLOG_BASE_PATH, BLOG_CATEGORY_BASE_PATH } from 'constants/blog';

const BlogPostsList = ({ className, items, pageCount, currentPageIndex, categorySlug }) => {
  const handlePageChange = ({ selected }) => {
    const navigateBasePath = selected === 0 ? BLOG_BASE_PATH : `${BLOG_BASE_PATH}${selected + 1}`;
    const navigateCategoryPath =
      selected === 0
        ? `${BLOG_CATEGORY_BASE_PATH}${categorySlug}`
        : `${BLOG_CATEGORY_BASE_PATH}${categorySlug}/${selected + 1}`;

    const navigatePath = categorySlug ? navigateCategoryPath : navigateBasePath;

    navigate(navigatePath);
  };

  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="divide-y divide-dashed divide-gray-80">
        {items.slice(0, 5).map((item, index) => (
          <BlogPostCard {...item} key={index} />
        ))}
      </div>
      <SubscriptionForm className="my-16" />
      <div className="divide-y divide-dashed divide-gray-80">
        {items.slice(5).map((item, index) => (
          <BlogPostCard {...item} key={index} />
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination
          className="mt-20 lg:mt-16"
          pageCount={pageCount}
          currentPageIndex={currentPageIndex}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

BlogPostsList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      ...blogPostCardPropTypes,
    })
  ).isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  categorySlug: PropTypes.string,
};

BlogPostsList.defaultProps = {
  className: null,
  categorySlug: null,
};

export default BlogPostsList;
