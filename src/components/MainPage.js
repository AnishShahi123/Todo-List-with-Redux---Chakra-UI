import React from "react";
import {
  Button,
  Box,
  Input,
  Stack,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/reducers/todoSlice";
import { DeleteIcon } from "@chakra-ui/icons";

export default function MainPage() {
  const [todoValue, setTodoValue] = React.useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoValue));
    setTodoValue("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <Stack align={"center"}>
      <Input
        placeholder="Add todos....."
        size={"md"}
        variant={"outline"}
        w={"50%"}
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <Button colorScheme="blue" size={"md"} w={"50%"} onClick={handleAdd}>
        Add Todo
      </Button>
      {todos.map((todo) => (
        <Box
          key={todo.id}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          w="50%"
          bgColor="white"
          boxShadow="md"
        >
          <Flex justify="space-between" alignItems="center">
            <Text fontSize="lg">{todo.text}</Text>
            <IconButton
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => handleDelete(todo.id)}
            />
          </Flex>
        </Box>
      ))}
    </Stack>
  );
}
