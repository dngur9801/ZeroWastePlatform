import styled from "styled-components";

export const CommentLayout = styled.div`
  width: 873px;
  padding: 20px 20px;
  display: flex;
  gap: 15px;
`;

export const CommentUserProfileBox = styled.div``;

export const CommentUserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: red;
`;

export const CommentBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const CommentUserName = styled.span`
  font-weight: 700;
`;

export const CommentContent = styled.div``;

export const CommentActions = styled.div`
  display: flex;
  gap: 15px;
`;

export const CommentButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const CommentReplyBox = styled.div`
  width: 778px;
  padding-left: 150px;
`;

export const CommentEditInput = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #bdbdbe;
  padding-left: 10px;
`;

export const CommentEditBtns = styled.div`
  display: flex;
  gap: 15px;
  width: 600px;
`;
