import React, { useState } from "react";
import useSortPaging from "../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import PagenationContainer from "../../../Common/Pagenation/PagenationContainer";
import InfoSharing from "./InfoSharing";

const InfoSharingContainer = () => {
  const { page, sort, changePage, changeSort } = useSortPaging(1, "최신순");

  const { data } = useSuspenseQuery<PostListType>(["Community", "InfoSharing", page], `posts/lists/3?page=${page - 1}`);
  console.log(data);

  return (
    <>
      <InfoSharing posts={data.content} />
      <PagenationContainer page={page} changePage={changePage} totalPage={data.totalPages} unit={6} />
    </>
  );
};

export default InfoSharingContainer;
