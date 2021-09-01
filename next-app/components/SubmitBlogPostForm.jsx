import { Button, TextField } from "@material-ui/core";

const SubmitBlogPostForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextField
        fullWidth
        variant="filled"
        color="primary"
        multiline
        row={3}
        margin="normal"
        name="text"
      ></TextField>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SubmitBlogPostForm;
