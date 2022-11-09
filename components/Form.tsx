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
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  TagLeftIcon,
  Checkbox,
  CheckboxGroup,
  FormErrorMessage,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { MdLocationCity } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Select, chakraComponents, ControlProps } from 'chakra-react-select';
import { mockCentre, mockVenue } from '../data/data';
import ConfirmModal from './ConfirmModal';

const components = {
  Control: ({ children, ...props }: any) => (
    <chakraComponents.Control {...props} className=" items-end">
      <span>
        <TagLeftIcon as={MdLocationCity} color="black" alignSelf="center" />
      </span>
      {children}
    </chakraComponents.Control>
  ),
};

export default function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submittedData, setSubmittedData] = useState('');
  const phoneRegExp = /^[1-9][0-9]{7}$/;

  const validationSchema = Yup.object().shape({
    centre: Yup.string(),
    venue: Yup.string(),
    eventDate: Yup.string(),
    eventTime: Yup.string(),
    '> 1000 sqf.': Yup.boolean(),
    '> 3000 sqf.': Yup.boolean(),
    LEDWall: Yup.boolean(),
    PASystemMicrophones: Yup.boolean(),
    stage: Yup.boolean(),
    fullName: Yup.string().required('Full Name is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email().required('Email is required'),
    company: Yup.string(),
    foodAndBeverage: Yup.string(),
    other: Yup.string(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, formState, handleSubmit, setValue, watch, control, getValues } =
    useForm(formOptions);
  const { errors } = formState;
  const watchCentre = watch('centre');
  useEffect(() => {
    if (watchCentre) {
      setValue('venue', mockVenue.find((el) => el.centre === watchCentre)?.venue[0].value);
    }
  }, [setValue, watchCentre]);
  const onSubmit = (data: any) => {
    console.log(data);
    setSubmittedData(data);
    onOpen();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
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
        <SimpleGrid h="auto" w="100%" minChildWidth={{ base: '50vw', md: '20vw' }} gap={8} mt={9}>
          <VStack>
            <FormControl h="60px">
              <FormLabel fontSize="12px" mb={0}>
                Centre
                {/* <Icon as={MdLocationCity} color="red" /> */}
              </FormLabel>
              <Controller
                control={control}
                defaultValue={mockCentre[0].value}
                name="centre"
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Select
                    instanceId="centre"
                    variant="flushed"
                    components={components}
                    options={mockCentre}
                    value={mockCentre.find((o) => o.value === value)}
                    onChange={(val: any) => onChange(val.value)}
                  />
                )}
              />
            </FormControl>
            <FormControl h="60px">
              <FormLabel fontSize="12px" mb={0}>
                Venue
              </FormLabel>
              <Controller
                control={control}
                defaultValue={mockVenue[0].venue[0].value}
                name="venue"
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Select
                    instanceId="venue"
                    variant="flushed"
                    components={components}
                    options={
                      watchCentre
                        ? mockVenue.find((el) => el.centre === watchCentre)?.venue
                        : mockVenue[0].venue
                    }
                    value={
                      watchCentre
                        ? mockVenue
                            .find((el) => el.centre === watchCentre)
                            ?.venue.find((o) => o.value === value)
                        : mockVenue[0].venue.find((o) => o.value === value)
                    }
                    onChange={(val: any) => onChange(val.value)}
                  />
                )}
              />
            </FormControl>
            <FormControl h="60px" className="flex items-center">
              <Input
                variant="flushed"
                {...register('eventDate')}
                placeholder="Event Date"
                type="text"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
              />
            </FormControl>
            <FormControl h="60px" className="flex items-center">
              <Input
                {...register('eventTime')}
                variant="flushed"
                placeholder="Event Time"
                type="text"
                onFocus={(e) => (e.target.type = 'time')}
                onBlur={(e) => (e.target.type = 'text')}
              />
            </FormControl>
            <FormControl h="auto" fontSize="12px" mb={0} display={{ base: 'none', md: 'block' }}>
              <FormLabel>Amenties</FormLabel>
              <Stack spacing={2} direction={['column', 'row']} flexWrap="wrap">
                <Checkbox {...register('> 1000 sqf.')} value="true">
                  {'> 1000 sqf.'}
                </Checkbox>
                <Checkbox {...register('> 3000 sqf.')} value="true">
                  {'> 3000 sqf.'}
                </Checkbox>
                <Checkbox {...register('LEDWall')} value="true">
                  LED Wall
                </Checkbox>
              </Stack>
              <Stack spacing={[1, 2]} direction={['column', 'row']}>
                <Checkbox {...register('PASystemMicrophones')} value="true">
                  PA System/ Microphones
                </Checkbox>
                <Checkbox {...register('stage')} value="true">
                  Stage
                </Checkbox>
              </Stack>
            </FormControl>
          </VStack>
          <VStack justifyContent="flex-start">
            <FormControl h="60px" isInvalid={errors.fullName && true}>
              <FormLabel fontSize="12px" mb={0} h="1.5rem"></FormLabel>
              <Input variant="flushed" {...register('fullName')} placeholder="Full Name*" />

              <FormErrorMessage>
                {errors.fullName && (errors.fullName.message as string)}
              </FormErrorMessage>
            </FormControl>
            <FormControl h="60px" isInvalid={errors.phoneNumber && true}>
              <FormLabel fontSize="12px" mb={0} h="1.5rem"></FormLabel>
              <Input
                type="tel"
                variant="flushed"
                {...register('phoneNumber')}
                placeholder="Phone Number*"
              />
              <FormErrorMessage>
                {errors.phoneNumber && (errors.phoneNumber.message as string)}
              </FormErrorMessage>
            </FormControl>
            <FormControl h="60px" isInvalid={errors.email && true}>
              <FormLabel fontSize="12px" mb={0} h="1.2rem"></FormLabel>
              <Input variant="flushed" {...register('email')} placeholder="Email*" />
              <FormErrorMessage>
                {errors.email && (errors.email.message as string)}
              </FormErrorMessage>
            </FormControl>
            <FormControl h="60px" isInvalid={errors.company && true}>
              <FormLabel fontSize="12px" mb={0} h="1.2rem"></FormLabel>
              <Input variant="flushed" {...register('company')} placeholder="Company" />
              <FormErrorMessage>
                {errors.company && (errors.company.message as string)}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              h="60px"
              isInvalid={errors.foodAndBeverage && true}
              display={{ base: 'none', md: 'block' }}
            >
              <FormLabel fontSize="12px" mb={0} h="1.2rem" color={'gray.400'}>
                Food & Beverage
              </FormLabel>
              <Input
                fontSize="12px"
                variant="flushed"
                {...register('foodAndBeverage')}
                placeholder="
                (Any food and beverage requirements?)"
                _placeholder={{ fontSize: '12px', wordWrap: 'wrap' }}
              />
              <FormErrorMessage>
                {errors.foodAndBeverage && (errors.foodAndBeverage.message as string)}
              </FormErrorMessage>
            </FormControl>
          </VStack>
          <VStack>
            <FormControl h="240px">
              <Textarea
                {...register('other')}
                placeholder="Other requirements?"
                size="sm"
                h="100%"
                resize={'none'}
              />
            </FormControl>
          </VStack>
        </SimpleGrid>
        <button type="submit" className="min-w-[15%] bg-navy py-2 px-3 mt-5">
          <Text
            color={'white'}
            fontSize={{ base: '10px', md: '14px' }}
            lineHeight="22px"
            fontWeight="500"
            textTransform="uppercase"
          >
            submit
          </Text>
        </button>
        <Text my={5}>*Required Fields</Text>
      </Flex>
      <ConfirmModal show={isOpen} context={submittedData} handleClose={onClose} />
    </form>
  );
}
