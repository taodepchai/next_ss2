"use client";
import React, { useState } from "react";
import styles from "./Bt8.module.css";
import classNames from "classnames";

const Bt8 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li
        className={classNames(styles.pageItem, {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </li>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <li
          key={page}
          className={classNames(styles.pageItem, {
            [styles.active]: currentPage === page,
          })}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={classNames(styles.pageItem, {
          [styles.disabled]: currentPage === totalPages,
        })}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};

export default Bt8;
