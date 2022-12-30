import React, {useState} from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button
} from "@mui/material";

const CommunityForm = () =>{
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        // Validate form data and send to server or perform other actions
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </FormControl>
            </div>
            <FormControl>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Sign up
            </Button>
            {error && (
                <FormHelperText error>
                    There was an error processing your request. Please try again.
                </FormHelperText>
            )}
        </form>
    );
    }

export default CommunityForm;
