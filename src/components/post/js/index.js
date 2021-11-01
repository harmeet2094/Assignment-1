import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Api from "../../../services/api";

const Post = () => {
  const history = useHistory();
  const [postArr, setPostArr] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await Api.getPost();
      setPostArr(response);
    } catch (error) {
      console.log({ error });
    }
  };

  const onDeletePost = async (id) => {    
    try {
      const response = await Api.deletePost(id);
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div>
      <br />
      <Container>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">User ID</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postArr.map((post) => (
                <TableRow
                  key={post.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {post.id}
                  </TableCell>
                  <TableCell align="right">{post.userId}</TableCell>
                  <TableCell align="left">{post.title}</TableCell>
                  <TableCell align="left">{post.body}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        onClick={() => onDeletePost(post.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          history.push({ pathname: "/edit", state: { post } })
                        }
                      >
                        Edit
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Post;
