import { Box, VStack, Heading, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
      <VStack spacing={4}>
        <Heading mb={6}>Todo App</Heading>
        <Input
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddTodo}>
          Add Task
        </Button>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              {todo}
              <IconButton
                icon={<FaTrash />}
                onClick={() => handleDeleteTodo(index)}
                aria-label="Delete task"
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Index;