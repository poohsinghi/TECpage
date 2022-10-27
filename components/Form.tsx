import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Center,
  Heading,
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { MdLocationCity } from 'react-icons/md';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Form() {
  const validationSchema = Yup.object().shape({
    // grai: Yup.string(),
    country: Yup.string().required('location is required'),
    invoiceNumber: Yup.string().required('invoice number is required'),
    // country['region']: Yup.string().required("location is required"),
    time: Yup.string(),
    process: Yup.string().required('Process is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, formState, handleSubmit, setValue, watch } = useForm(formOptions);
  const { errors } = formState;
  const watchCountry = watch('country');

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <Flex
      h={'100%'}
      w={'100%'}
      className="xs:bg-[#FAFAFA] xs:border flex-col border-[#E4E4E7] !mb-20 py-9 px-8 items-start box-border"
    >
      <Heading className="text-navy" fontSize="24px" lineHeight="31px">
        Have questions? Leave us a message.
      </Heading>
      <Text mt={2} color="gray.600" fontSize={'16px'} lineHeight="19px">
        Complete the form and our team member will be in touch with you shortly
      </Text>
      <SimpleGrid h="400px" w="100%" minChildWidth={{ base: '50vw', md: '20vw' }} gap={4} mt={9}>
        <VStack>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0}>
              Centre
              {/* <Icon as={MdLocationCity} color="red" /> */}
            </FormLabel>
            <Select variant="flushed">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0}>Centre</FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel mt={5}></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
        </VStack>
        <VStack justifyContent='flex-start'>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0} h='1.5rem'>
              {/* <Icon as={MdLocationCity} color="red" /> */}
            </FormLabel>
            <Select variant="flushed">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0} h='1.5rem'></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel mt={5}></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
        </VStack>
        <VStack>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0}>
              Centre
              {/* <Icon as={MdLocationCity} color="red" /> */}
            </FormLabel>
            <Select variant="flushed">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel fontSize="12px" mb={0}>Centre</FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel mt={5}></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
          <FormControl h='60px'>
            <FormLabel></FormLabel>
            <Select variant="flushed"></Select>
          </FormControl>
        </VStack>

        
      </SimpleGrid>
      <button
           onClick={(e: any) => {
            console.log(e.target.outerText);
          }}
          className=" w-1/5 bg-navy p-2"
        >
          <Text
            color={'white'}
            fontSize="12px"
            lineHeight="22px"
            fontWeight="500"
            textTransform="uppercase"
          >
            enquiry
          </Text>
        </button>
        <Text my={5}>*Required Fields</Text>
    </Flex>
  );
}
