import React, { useEffect, useState } from "react";
import {
  ListWrapper,
  CommentCard,
  Avatar,
  Name,
  Message,
  Timestamp,
} from "./CommentList.style";

const CommentList = ({ refresh }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzRcq_TjK5TD7h-E2VVdWJjBv3HWcu8Q-kNfkAzMUoEbDZna-dGosTbuStIjcilcuBx/exec"
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setComments(data.reverse()); 
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  return (
    <ListWrapper>
      {comments.length === 0 ? (
        <p>Belum ada ucapan.</p>
      ) : (
        comments.map((item, i) => (
          <CommentCard key={i}>
            <Avatar>{item.photo}</Avatar>

            <div>
              <Name>{item.name}</Name>
              <Message>{item.message}</Message>
              <Timestamp>
                {new Date(item.timestamp).toLocaleString()}
              </Timestamp>
            </div>
          </CommentCard>
        ))
      )}
    </ListWrapper>
  );
};

export default CommentList;
