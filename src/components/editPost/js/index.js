import React, { useState } from "react";
import { Container, Box, TextField, Stack, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import Api from "../../../services/api";

const EditPost = (props) => {
  const history = useHistory();
  const { id, userId, title, body } = props.location.state.post;
  const [postTitle, setPostTitle] = useState(title);
  const [postBody, setPostBody] = useState(body);

  const onEditPost = async () => {
    try {
      const response = await Api.editPost(id, {
        id,
        userId,
        title: postTitle,
        body,
        postBody,
      });
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "60%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Id"
          InputProps={{
            readOnly: true,
          }}
          value={id}
        />
        <TextField
          label="User Id"
          InputProps={{
            readOnly: true,
          }}
          value={userId}
        />
        <TextField
          label="Title"
          value={postTitle}
          onChange={(event) => setPostTitle(event.target.value)}
        />
        <TextField
          label="Body"
          multiline
          maxRows={4}
          value={postBody}
          onChange={(event) => setPostBody(event.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => history.goBack()}>
            Go Back
          </Button>
          <Button variant="outlined" onClick={onEditPost}>
            Edit
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default EditPost;
